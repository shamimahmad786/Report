import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxPublicRoutingModule } from './sandbox-public-routing.module';
import { PgiPublicComponent } from './pgi-public/pgi-public.component';
import { SchoolDashboardComponent } from './pgi-public/school-dashboard/school-dashboard.component';
import { StudentDashboardComponent } from './pgi-public/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './pgi-public/teacher-dashboard/teacher-dashboard.component';
import { NavigationComponent } from '../sandbox-admin/pgi-admin/navigation/navigation.component';
import {MaterialModule} from '../shared/material/material.module';
import {SharedModule} from '../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PgiPublicComponent, SchoolDashboardComponent, StudentDashboardComponent, TeacherDashboardComponent,NavigationComponent],
  imports: [
    CommonModule,
    SandboxPublicRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SandboxPublicModule { 

  constructor(){
    console.log("SandBox Public Modile loaded")
  }
}
