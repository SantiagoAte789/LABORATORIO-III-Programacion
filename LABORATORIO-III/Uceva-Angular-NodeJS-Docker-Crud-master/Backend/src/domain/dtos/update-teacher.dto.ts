export class UpdateTeacherDTO {

    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly department: string,
        public readonly experience_years: number,
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, UpdateTeacherDTO?]{
        const {
            name,
            email,
            phone,
            department,
            experience_years,
            status
        } = object;

        if(!name) return ["Falta el nombre"];
        if(!email) return ["Falta el correo"];
        if(!phone) return ["Falta el teléfono"];
        if(!department) return ["Falta el departamento"];
        if(!experience_years) return ["Falta los años de experiencia"];
        if(typeof status !== "boolean") return ["El estado debe ser verdadero o falso"];

        if(name && name.length > 100)
            return ["El nombre es demasiado largo, el máximo es 100 caracteres"];

        if(email && email.length > 150)
            return ["El correo es demasiado largo, el máximo es 150 caracteres"];

        if(phone && phone.length > 10)
            return ["El teléfono es demasiado largo, el máximo es 10 caracteres"];

        if(department && department.length > 100)
            return ["El departamento es demasiado largo, el máximo es 100 caracteres"];

        return [
            undefined,
            new UpdateTeacherDTO(
                name,
                email,
                phone,
                department,
                experience_years,
                status
            )
        ];

    }

}