import { Routes } from '@angular/router';
import { ListStudents } from './modules/students/pages/list-students/list-students';
import { CreateStudent } from './modules/students/pages/create-student/create-student';
import { DetailStudent } from './modules/students/pages/detail-student/detail-student';
import { UpdateStudent } from './modules/students/pages/update-student/update-student';

export const routes: Routes = [
    { path: '', redirectTo: 'students', pathMatch: 'full' },
    {
        path: 'students',
        children: [
            { path: 'list', component: ListStudents },
            { path: 'create', component: CreateStudent },
            { path: 'update/:id', component: UpdateStudent },
            { path: 'detail/:id', component: DetailStudent },
            { path: '**', redirectTo: 'list' }
        ]
    },
    // Módulos del Laboratorio III (carga diferida: cada módulo define sus propias rutas)
    {
        path: 'teachers',
        loadChildren: () => import('./modules/teachers/teachers.routes').then(m => m.TEACHERS_ROUTES)
    },
    {
        path: 'classrooms',
        loadChildren: () => import('./modules/classrooms/classrooms.routes').then(m => m.CLASSROOMS_ROUTES)
    },
    { path: '**', redirectTo: 'students' }
];
