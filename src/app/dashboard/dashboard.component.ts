import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //observable1:Observable<Project[]>;
  projects: any;

  constructor(private _projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {
    this.getAllProjects();
  }

  createProject() {
    this._projectService.create(null);
  }

  updateProject() {
    this._projectService.update();
  }

  deleteProject() {
    this._projectService.delete();
  }

  getProject(name: string) {
    this._projectService.get('');
  }

  getAllProjects() {

    this._projectService.getAll().subscribe(res => {

      if (res) {
        this.projects = res;
      }
    },
      error => alert(error),
      () => console.log('Finished')
    );

  }

  onSelect(project: Project) {
    this.router.navigate(['/project', project.projectname]);
  }

}
