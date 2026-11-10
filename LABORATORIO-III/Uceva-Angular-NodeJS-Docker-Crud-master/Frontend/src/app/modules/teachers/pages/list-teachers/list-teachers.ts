import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { AlertService } from '../../../shared/services/alert.service';
import { TableTeachers } from '../../components/table-teachers/table-teachers';
import { Teacher } from '../../interfaces/teacher';
import { TableTeachersEvents } from '../../interfaces/table-teachers';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  imports: [
    Button,
    TableTeachers
  ],
  templateUrl: './list-teachers.html',
})
export class ListTeachers {

  teachers: Teacher[] = [];
  loading = true;
  hasError = false;

  createButtonConfig: ButtonConfig = {
    id: 'create-teacher-button',
    title: 'Crear profesor',
    type: 'primary',
  };

  router = inject(Router);
  teacherService = inject(TeacherService);
  alertService = inject(AlertService);

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers(){
    this.loading = true;
    this.hasError = false;
    this.teacherService.getAll().subscribe({
      next: (teachers: Teacher[]) => {
        this.teachers = teachers;
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
        this.hasError = true;
        console.error('Error al consultar los profesores:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al consultar los profesores'), 'error');
      }
    });
  }

  createTeacher(){
    this.router.navigateByUrl('/teachers/create');
  }

  tableEvents({ id, action }: TableTeachersEvents){
    switch(action){
      case 'detail':
        this.viewDetail(id);
        break;
      case 'edit':
        this.update(id);
        break;
      case 'delete':
        this.delete(id);
        break;
    }
  }

  viewDetail(id: number){
    this.router.navigateByUrl(`/teachers/detail/${id}`);
  }

  update(id: number){
    this.router.navigateByUrl(`/teachers/update/${id}`);
  }

  async delete(id: number){
    const title = '¿Está seguro?';
    const text = `Se va a eliminar el profesor ${id}`;
    const confirm = await this.alertService.confirm(title, text);
    if(confirm){
      this.teacherService.delete(id).subscribe({
        next: () => {
          this.alertService.toast('Eliminación exitosa', 'success');
          this.getTeachers();
        },
        error: (error: any) => {
          this.alertService.toast(this.alertService.errorMessage(error, 'Error al eliminar el profesor'), 'error');
        }
      });
    }
  }

}
