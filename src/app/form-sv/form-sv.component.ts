import {
  Component,
  OnInit
} from '@angular/core';
import {
  Students
} from './student';

@Component({
  selector: 'app-form-sv',
  templateUrl: './form-sv.component.html',
  styleUrls: ['./form-sv.component.css']
})
export class FormSvComponent implements OnInit {
  check = true;
  constructor() {}
  stuInfo = {
    id: 0,
    name : '',
    birth: new Date().toISOString().substring(0, 10),
    rate : 0
  };
  student: Students[] = [
    {
      id: 1,
      name: 'Nguyễn văn tèo',
      birth: new Date(2019, 6, 30).toLocaleDateString().substring(0, 10),
      rate: 8
    },
    {
      id: 2,
      name: 'Phan thị nở',
      birth: new Date(2018, 2, 29).toLocaleDateString().substring(0, 10),
      rate: 0
    },

  ];
  edit(stu:any){
    this.showFormEdit = true;
    this.stuInfo.id = stu.id;
    this.stuInfo.name = stu.name;
    this.stuInfo.birth = stu.birth;
    this.stuInfo.rate = stu.rate;

  }
  save(stu:any){
    this.showFormEdit = false;
    this.student.forEach(ele => {
      if(ele.id == this.stuInfo.id) {
        ele.name = this.stuInfo.name;
        ele.birth = this.stuInfo.birth;
        ele.rate = this.stuInfo.rate;
        this.check = true;
        return;
      }else {
        this.check = false;
      }
    })
    if(this.check == false){
      this.student.push(this.stuInfo);
    }
  }
  showFormEdit = false;
  ngOnInit() {}

}
