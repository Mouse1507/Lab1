import {
  Component,
  OnInit
} from '@angular/core';
import {
  StudentInfoService
} from './../student-info.service';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  students: any;
  constructor(private _studentService: StudentInfoService) {}

  ngOnInit() {
    this.students = this._studentService.students;
  }

  chooseStudent(studentId) {
    this._studentService.chooseStudent(studentId);
  }
  removeStudent(studentId) {
    this._studentService.removeStudent(studentId);
  }
}
