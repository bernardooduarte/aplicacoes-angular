import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(
                m => m.HomeComponent
            )
        },
    },
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/todos/todos.component').then(
                m => m.TodosComponent
            )
        },
    }
];
