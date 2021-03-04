import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: "project-list", component: ProjectListComponent }, { path: "project-list/:id", component: DetailsComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRountingModule { }
