import { Lop } from './../models/lop';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Component, OnInit } from '@angular/core';
import { LopService } from '../services/lop.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  danhSachLop: Lop[] = [];

  constructor(private studentService: StudentService, private lopService: LopService, private router: Router) { }

  ngOnInit(): void {
    this.layTatCaLop();
  }

  private layTatCaLop() {
    this.lopService.layTatCaLop().subscribe(
      danhSachLop => {
        this.danhSachLop = danhSachLop;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStudent(masv: String) {
    this.router.navigate(["update-student", masv]);
  }

  deleteStudent(masv: String) {
    this.studentService.deleteStudent(masv).subscribe(
      () => {
        this.layTatCaLop();
        alert("Xóa thành công!")
      },
      err => {
        console.log(err);        
      }
    );
  }

  studentDetail(masv: String) {
    this.router.navigate(["student-detail", masv]);
  }

}
