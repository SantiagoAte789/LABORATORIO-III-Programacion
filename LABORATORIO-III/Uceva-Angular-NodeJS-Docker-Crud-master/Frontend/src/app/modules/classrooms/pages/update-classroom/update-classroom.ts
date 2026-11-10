import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Classroom, UpdateClassroomRequest } from '../../interfaces/classroom';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-update-classroom',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './update-classroom.html',
})
export class UpdateClassroom {

  id!: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
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

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = Number(paramId);
    if (!paramId || !Number.isFinite(this.id) || this.id <= 0) {
      this.alertService.toast('Identificación no válida', 'error');
      this.goToList();
      return;
    }
    this.getClassroom();
  }

  getClassroom() {
    this.classroomService.getById(this.id).subscribe({
      next: (classroom) => {
        // El backend responde 200 con null cuando el id no existe
        if (!classroom) {
          this.alertService.toast('No se encontró el aula', 'error');
          this.goToList();
          return;
        }
        this.setValues(classroom);
      },
      error: (error: any) => {
        console.error('Error al consultar el aula:', error);
        this.alertService.toast('Error al consultar el aula', 'error');
        this.goToList();
      }
    });
  }

  setValues(classroom: Classroom): void {
    this.classroomForm.patchValue({
      name: classroom.name,
      building: classroom.building,
      capacity: classroom.capacity,
      type: classroom.type,
      floor: classroom.floor,
      status: classroom.status
    });
  }

  updateClassroom(): void {
    if (this.classroomForm.invalid) {
      this.classroomForm.markAllAsTouched();
      return;
    }
    const v = this.classroomForm.getRawValue();
    const classroom: UpdateClassroomRequest = {
      name: v.name!,
      building: v.building!,
      capacity: v.capacity!,
      type: v.type!,
      floor: v.floor!,
      status: v.status!
    };

    this.classroomService.update(this.id, classroom).subscribe({
      next: () => {
        this.alertService.toast('Aula actualizado correctamente', 'success');
        this.goToList();
      },
      error: (error: any) => {
        console.error('Error al actualizar el aula:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al actualizar el aula'), 'error');
      }
    });
  }

  goToList() {
    this.router.navigateByUrl('/classrooms');
  }

}
