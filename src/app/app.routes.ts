import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path : "",component : HomeComponent},
    {path : "list",loadComponent: () => import('../list/list.component').then(a=> a.ListComponent)},
    {path : "profile-builder", loadComponent : () => import('../profile-details/profile-details.component').then(a => a.ProfileDetailsComponent)},
    {path : "products", loadComponent : () => import('../product-list/product-list.component').then(a => a.ProductListComponent)},
    {path : "todo", loadComponent : () => import('../todolist/todolist.component').then(a=> a.TodolistComponent)}
];
