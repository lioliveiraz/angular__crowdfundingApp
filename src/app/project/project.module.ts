import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRountingModule } from './project-rounting.module';
import { CardComponent } from './card/card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FilterComponent } from './filter/filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DetailsComponent } from './details/details.component';
import { DonateComponent } from './details/donate/donate.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CardComponent, ProjectListComponent, FilterComponent, DetailsComponent, DonateComponent],
  imports: [
    CommonModule,
    ProjectRountingModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule

  ]
})
export class ProjectModule { }
