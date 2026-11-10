import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { Teacher, UpdateTeacherRequest } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-update-teacher',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './update-teacher.html',
})
export class UpdateTeacher {

  id!: number;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private alertService = inject(AlertService);
  private teacherService = inject(TeacherService);

  teacherForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    phone: ['', [Validators.required, Validators.pattern(/^\d{7,10}$/)]],
    department: ['', [Validators.required, Validators.maxLength(100)]],
    experience_years: [null as number | null, [Validators.required, Validators.min(1), Validators.max(60)]],
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
    this.getTeacher();
  }

  getTeacher() {
    this.teacherService.getById(this.id).subscribe({
      next: (teacher) => {
        // El backend responde 200 con null cuando el id no existe
        if (!teacher) {
          this.alertService.toast('No se encontró el profesor', 'error');
          this.goToList();
          return;
        }
        this.setValues(teacher);
      },
      error: (error: any) => {
        console.error('Error al consultar el profesor:', error);
        this.alertService.toast('Error al consultar el profesor', 'error');
        this.goToList();
      }
    });
  }

  setValues(teacher: Teacher): void {
    this.teacherForm.patchValue({
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      department: teacher.department,
      experience_years: teacher.experience_years,
      status: teacher.status
    });
  }

  updateTeacher(): void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
      return;
    }
    const v = this.teacherForm.getRawValue();
    const teacher: UpdateTeacherRequest = {
      name: v.name!,
      email: v.email!,
      phone: v.phone!,
      department: v.department!,
      experience_years: v.experience_years!,
      status: v.status!
    };

    this.teacherService.update(this.id, teacher).subscribe({
      next: () => {
        this.alertService.toast('Profesor actualizado correctamente', 'success');
        this.goToList();
      },
      error: (error: any) => {
        console.error('Error al actualizar el profesor:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al actualizar el profesor'), 'error');
      }
    });
  }

  goToList() {
    this.router.navigateByUrl('/teachers');
  }

}
