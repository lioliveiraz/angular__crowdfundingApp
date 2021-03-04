import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProject } from './Interfaces/project.interface';
import { ProjectService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  filteredProjects: IProject[]
  projectList: IProject[]
  errorMessage: string
  showFiller: boolean = false
  _listFilter: string
  isHighest: boolean = false
  showFilter: boolean = false
  constructor(private _projectService: ProjectService) { }


  ngOnInit(): void {

    this._projectService.getProject().subscribe({
      next: projects => { this.projectList = projects; this.filteredProjects = projects },
      error: err => this.errorMessage = err
    })

  }

  toggleShowFillet() {
    this.showFiller = !this.showFiller
  }

  filterProductByName(filterBy: string): void {
    filterBy = filterBy.toLocaleLowerCase()
    const arr = this.projectList.filter((project: IProject) => {
      return project.name.toLocaleLowerCase().includes(filterBy)
    })
    this.filteredProjects = arr
  }



  sortByGoal(): void {
    if (this.isHighest) {
      this.filteredProjects = this.filteredProjects.slice().sort((a, b) => {
        return a.goal - b.goal
      })
      this.isHighest = false
    } else {
      this.filteredProjects = this.filteredProjects.slice().sort((a, b) => {
        return b.goal - a.goal
      })
      this.isHighest = true

    }

  }

}
