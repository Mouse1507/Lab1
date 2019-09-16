import {
  Component,
  OnInit
} from '@angular/core';
import {
  StudentInfoService
} from './../student-info.service';

import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-sv-detail',
  templateUrl: './sv-detail.component.html',
  styleUrls: ['./sv-detail.component.css']
})
export class SvDetailComponent implements OnInit {

  sinhvien: any;
  thongtinlienquansv: any;
  svId;

  constructor(private route: ActivatedRoute, private _studentService: StudentInfoService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.svId = +param.get("svId");
    })
    this.sinhvien = this._studentService.students.find(sv => sv.ID === this.svId);
    //get student course
    this.thongtinlienquansv = this._studentService.filterInfoStudent();

  }

}
