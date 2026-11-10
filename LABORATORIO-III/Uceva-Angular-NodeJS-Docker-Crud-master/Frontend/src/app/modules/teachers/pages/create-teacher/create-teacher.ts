import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Back } from '../../../shared/components/back/back';
import { AlertService } from '../../../shared/services/alert.service';
import { CreateTeacherRequest } from '../../interfaces/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-create-teacher',
  imports: [
    Back,
    ReactiveFormsModule
  ],
  templateUrl: './create-teacher.html',
})
export class CreateTeacher {

  private fb = inject(FormBuilder);
  private router = inject(Router);
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

  createTeacher(): void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
      return;
    }
    const v = this.teacherForm.getRawValue();
    const teacher: CreateTeacherRequest = {
      name: v.name!,
      email: v.email!,
      phone: v.phone!,
      department: v.department!,
      experience_years: v.experience_years!,
      status: v.status!
    };
    this.teacherService.create(teacher).subscribe({
      next: () => {
        this.alertService.toast('Profesor registrado correctamente', 'success');
        this.router.navigateByUrl('/teachers');
      },
      error: (error: any) => {
        console.error('Error al crear el profesor:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al crear el profesor'), 'error');
      }
    });
  }

}
