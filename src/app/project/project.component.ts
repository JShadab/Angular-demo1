import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectName = '';
  projectRecords: any;

  constructor( /* private _excelService: ExcelService, */  private activatedRoute: ActivatedRoute, private _projectService: ProjectService) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this._projectService.get(name);
    this.projectName = name;

    this.getAllProjectRecords(this.projectName);
  }

  getAllProjectRecords(name: string) {
    this._projectService.getAllProjectRecords(name).subscribe(res => {

      if (res) {
        this.projectRecords = res;
      }
    },
      error => alert(error),
      () => console.log('Finished')
    );
  }
  
   toExcels() {

    new ExcelService().exportAsExcelFile(this.projectRecords, 'sample');
  } 
}
