import { Routes } from '@angular/router';
import { ListClassrooms } from './pages/list-classrooms/list-classrooms';
import { CreateClassroom } from './pages/create-classroom/create-classroom';
import { DetailClassroom } from './pages/detail-classroom/detail-classroom';
import { UpdateClassroom } from './pages/update-classroom/update-classroom';

export const CLASSROOMS_ROUTES: Routes = [
    { path: 'list', component: ListClassrooms },
    { path: 'create', component: CreateClassroom },
    { path: 'update/:id', component: UpdateClassroom },
    { path: 'detail/:id', component: DetailClassroom },
    { path: '**', redirectTo: 'list' }
];
