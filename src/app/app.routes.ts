import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/home/pages/home/home.component';

export const routes: Routes = [
    {path:'',
         component:MainLayoutComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    }
];
