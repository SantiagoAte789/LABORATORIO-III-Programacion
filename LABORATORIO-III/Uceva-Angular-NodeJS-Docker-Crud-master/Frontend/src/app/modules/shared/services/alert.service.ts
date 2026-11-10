import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  
  // Confirmación de acciones
  confirm(
    title: string,
    text: string,
    confirmButtonText: string = 'Aceptar'
  ): Promise<boolean> {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText,
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then(result => result.isConfirmed);
  }

  // Notificación tipo Toast
  toast(message: string, icon: 'success' | 'error' | 'warning' | 'info' = 'success'): void {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }

  // Mensaje de error devuelto por el backend ({ error: '...' }) o uno por defecto
  errorMessage(error: any, fallback: string): string {
    if (error?.status === 0) return 'No hay conexión con el servidor. Verifica que el backend esté en ejecución.';
    return error?.error?.error ?? fallback;
  }

}
