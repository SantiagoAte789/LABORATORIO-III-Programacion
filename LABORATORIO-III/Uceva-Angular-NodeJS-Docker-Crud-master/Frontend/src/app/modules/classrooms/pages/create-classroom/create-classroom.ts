import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { CreateClassroomRequest } from '../../interfaces/classroom';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-create-classroom',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './create-classroom.html',
})
export class CreateClassroom {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private alertService = inject(AlertService);
  private classroomService = inject(ClassroomService);

  classroomForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    building: ['', [Validators.required, Validators.maxLength(100)]],
    capacity: [null as number | null, [Validators.required, Validators.min(1), Validators.max(500)]],
    type: ['', [Validators.required, Validators.maxLength(50)]],
    floor: [null as number | null, [Validators.required, Validators.min(1), Validators.max(10)]],
    status: [true]
  });

  createClassroom(): void {
    if (this.classroomForm.invalid) {
      this.classroomForm.markAllAsTouched();
      return;
    }
    const v = this.classroomForm.getRawValue();
    const classroom: CreateClassroomRequest = {
      name: v.name!,
      building: v.building!,
      capacity: v.capacity!,
      type: v.type!,
      floor: v.floor!,
      status: v.status!
    };
    this.classroomService.create(classroom).subscribe({
      next: () => {
        this.alertService.toast('Aula registrado correctamente', 'success');
        this.router.navigateByUrl('/classrooms');
      },
      error: (error: any) => {
        console.error('Error al crear el aula:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al crear el aula'), 'error');
      }
    });
  }

}
