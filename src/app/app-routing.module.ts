import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { HeroComponent } from './portafolio/pages/hero/hero.component';
import { AboutComponent } from './portafolio/pages/about/about.component';

const routes: Routes = [
    {
        path: '',
        component: HeroComponent,
        pathMatch: 'full'
    },
    {
        path: 'acerca',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule

    ]
})
export class AppRoutingModule {}
