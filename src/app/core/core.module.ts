import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
