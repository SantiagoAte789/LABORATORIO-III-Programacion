import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../../../shared/components/button/button';
import { ButtonConfig } from '../../../shared/interfaces/button';
import { AlertService } from '../../../shared/services/alert.service';
import { TableClassrooms } from '../../components/table-classrooms/table-classrooms';
import { Classroom } from '../../interfaces/classroom';
import { TableClassroomsEvents } from '../../interfaces/table-classrooms';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-list-classrooms',
  imports: [
    Button,
    TableClassrooms
  ],
  templateUrl: './list-classrooms.html',
})
export class ListClassrooms {

  classrooms: Classroom[] = [];
  loading = true;
  hasError = false;

  createButtonConfig: ButtonConfig = {
    id: 'create-classroom-button',
    title: 'Crear aula',
    type: 'primary',
  };

  router = inject(Router);
  classroomService = inject(ClassroomService);
  alertService = inject(AlertService);

  ngOnInit() {
    this.getClassrooms();
  }

  getClassrooms(){
    this.loading = true;
    this.hasError = false;
    this.classroomService.getAll().subscribe({
      next: (classrooms: Classroom[]) => {
        this.classrooms = classrooms;
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
        this.hasError = true;
        console.error('Error al consultar las aulas:', error);
        this.alertService.toast(this.alertService.errorMessage(error, 'Error al consultar los aulas'), 'error');
      }
    });
  }

  createClassroom(){
    this.router.navigateByUrl('/classrooms/create');
  }

  tableEvents({ id, action }: TableClassroomsEvents){
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
    this.router.navigateByUrl(`/classrooms/detail/${id}`);
  }

  update(id: number){
    this.router.navigateByUrl(`/classrooms/update/${id}`);
  }

  async delete(id: number){
    const title = '¿Está seguro?';
    const text = `Se va a eliminar el aula ${id}`;
    const confirm = await this.alertService.confirm(title, text);
    if(confirm){
      this.classroomService.delete(id).subscribe({
        next: () => {
          this.alertService.toast('Eliminación exitosa', 'success');
          this.getClassrooms();
        },
        error: (error: any) => {
          this.alertService.toast(this.alertService.errorMessage(error, 'Error al eliminar el aula'), 'error');
        }
      });
    }
  }

}
