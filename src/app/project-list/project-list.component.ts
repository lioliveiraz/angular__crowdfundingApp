import { Component, OnInit, Output } from '@angular/core';
import { IProject } from './Interfaces/project.interface';
import { ProjectService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  projectList: IProject[]
  errorMessage: string
  showFiller: boolean = false

  constructor(private _projectService: ProjectService) { }

  ngOnInit(): void {

    this._projectService.getProject().subscribe({
      next: projects => this.projectList = projects,
      error: err => this.errorMessage = err
    })
  }

  toggleShowFillet() {
    this.showFiller = !this.showFiller
  }


}
