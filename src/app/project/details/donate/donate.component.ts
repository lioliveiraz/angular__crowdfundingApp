import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../project-list/Interfaces/project.interface';
import { ProjectService } from './../../project-list/project-list.service';
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  @Input() projectObj: IProject
  project: IProject
  max: number
  value: number
  snackbar: string
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _projectService: ProjectService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.project = this.projectObj
    this.max = this.project.goal - this.project.donated
  }

  handleSubmit(): void {
    this.project['donated'] += this.value
    this._projectService.updateDonated(this.project).subscribe({
      next: res => { this.snackbar = "Thank you for your donation"; this.value = 0; this.openSnackBar() },
      error: err => { this.snackbar = err.statusText; this.openSnackBar() }
    })
  }
  openSnackBar(action: string = "close") {

    this._snackBar.open(this.snackbar, action, {
      duration: 2000,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,

    });

  }
}
