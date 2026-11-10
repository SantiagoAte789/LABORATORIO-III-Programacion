import { Routes } from '@angular/router';
import { ListTeachers } from './pages/list-teachers/list-teachers';
import { CreateTeacher } from './pages/create-teacher/create-teacher';
import { DetailTeacher } from './pages/detail-teacher/detail-teacher';
import { UpdateTeacher } from './pages/update-teacher/update-teacher';

export const TEACHERS_ROUTES: Routes = [
    { path: 'list', component: ListTeachers },
    { path: 'create', component: CreateTeacher },
    { path: 'update/:id', component: UpdateTeacher },
    { path: 'detail/:id', component: DetailTeacher },
    { path: '**', redirectTo: 'list' }
];
