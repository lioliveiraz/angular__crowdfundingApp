import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project-list/project-list.service';
import { IProject } from './../project-list/Interfaces/project.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {
  @ViewChild('donateComp', { read: ViewContainerRef })
  private donateViewContainerRef: ViewContainerRef;
  errorMessage: string
  project: IProject
  isDonatedOpen: boolean = false

  constructor(private route: ActivatedRoute, private _projectService: ProjectService, private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id")
    this._projectService.getProjectById(id).subscribe({
      next: project => { this.project = project[0] },
      error: err => this.errorMessage = err
    })

  }


  async loadDonateComponent(): Promise<void> {
    this.donateViewContainerRef.clear();
    const { DonateComponent } = await import(`./donate/donate.component`);
    let donateComp = this.donateViewContainerRef.createComponent(this.cfr.resolveComponentFactory(DonateComponent))
    this.isDonatedOpen = true

    donateComp.instance.projectObj = this.project


  }

}
