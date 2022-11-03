import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentComponent } from './all-student/all-student.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UpdateAllComponent } from './update-all/update-all.component';

const routes: Routes = [
  {component:AllStudentComponent, path: "allStu"},
  {component:UpdateAllComponent, path: "updateAll"},
  {component:HomeComponent, path: "home"},
  {component: EditComponent, path: "edit/:id"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
