import { Routes } from '@angular/router';

import { contactComponent } from './components/contact/contact.component';

import { ListComponent } from './components/home/list/list.component';
import { DetailComponent } from './components/home/detail/detail.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    { path: 'about', loadChildren: './components/about/about.module#AboutModule' },
    { path: 'contact', component: contactComponent },
    { path: 'news', loadChildren: './components/news/news.module#NewsModule' }
];