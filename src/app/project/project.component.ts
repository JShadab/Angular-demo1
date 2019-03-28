import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectName='';

  constructor(private activatedRoute:ActivatedRoute,private _projectService: ProjectService) { }

  ngOnInit() {
    let name=this.activatedRoute.snapshot.paramMap.get('name');
    this._projectService.get(name);
    this.projectName=name;
  }

  getAllProjectRecord(name:string){
    this._projectService.get
  }

}
