import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent
  ],
  exports:[
    HeroComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
