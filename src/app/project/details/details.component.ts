import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project-list/project-list.service';
import { IProject } from './../project-list/Interfaces/project.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  errorMessage: string
  project: IProject

  constructor(private route: ActivatedRoute, private _projectService: ProjectService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id")
    this._projectService.getProjectById(id).subscribe({
      next: project => { this.project = project },
      error: err => this.errorMessage = err
    })
  }

}
