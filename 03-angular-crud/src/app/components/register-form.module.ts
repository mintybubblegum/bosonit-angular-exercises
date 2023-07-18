import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterTableComponent } from './register-table/register-table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    RegisterTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    RegisterTableComponent
  ]
})
export class RegisterFormModule { }
