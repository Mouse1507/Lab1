import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  svList = [{
      name: 'Nguyễn Văn Tèo',
      birthday: '20-01-1999',
      gender: 'Nam',
      photo: 'teo.jpg',
      mark: 8.5
    },
    {
      name: 'Phan thị nở',
      birthday: '20-12-1999',
      gender: 'Nữ',
      photo: 'no.jpg',
      mark: 8.5
    },
    {
      name: 'Nguyễn khá Bảnh',
      birthday: '20-01-2000',
      gender: 'Nam',
      photo: 'banh.jpg',
      mark: 8.5
    },
  ]
  constructor() {}

  ngOnInit() {}

}
