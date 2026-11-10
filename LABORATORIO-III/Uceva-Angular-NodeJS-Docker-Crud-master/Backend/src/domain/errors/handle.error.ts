import { Response } from "express";
import { CustomError } from "./custom.error";


export class HandleError {

  private static readonly uniqueMessages: Record<string, string> = {
    teachers_email_key: 'El correo ya está registrado',
    teachers_phone_key: 'El teléfono ya está registrado',
    classrooms_name_key: 'Ya existe un aula con ese nombre',
    students_email_key: 'El correo ya está registrado',
    students_phone_key: 'El teléfono ya está registrado',
    courses_name_key: 'Ya existe un curso con ese nombre',
  };

 
  private static uniqueViolationMessage(error: any): string {
    const known = HandleError.uniqueMessages[error?.constraint];
    if (known) return known;

    const field = /\((\w+)\)=/.exec(error?.detail ?? '')?.[1];
    if (field === 'email') return 'El correo ya está registrado';
    if (field === 'phone') return 'El teléfono ya está registrado';
    if (field === 'name') return 'Ya existe un registro con ese nombre';
    return 'Ya existe un registro con esos datos';
  }


  static error(error: unknown, res: Response) {
    console.log(`${error}`);

    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: error.message });
    }

    
    if ((error as any)?.code === '23505') {
      return res
        .status(409)
        .json({ error: HandleError.uniqueViolationMessage(error) });
    }

    return res
      .status(500)
      .json({ error: 'Internal Server error' });
  }
}
