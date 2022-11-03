import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  public studentDetails: any = null;

  constructor(private stuServ: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent() {
    console.log("In all-student component");
    this.stuServ.getAllStudent().subscribe(
      (res) => {
        console.log(res);
        this.studentDetails = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  //Deleting student
  public deleteStu(student: any){
    console.log(student.id);
    if(confirm("Are you sure to delete "+student.name+"?")){
      this.stuServ.deleteStu(student.id).subscribe(
        (res) => {
          console.log("res = "+res);
        },
        (err) => {
          //console.log("Error accured = "+err);
          console.log("err.status = "+err.status);
          console.log(err.error.text);
        }
      )
      //this.ngOnInit();
        location.reload();
    }
    console.log("Inside the delete method! ");
  }


  //Editing Student
  public edit(student: any){
    console.log("inside the edit id = ",student.id);
    this.router.navigate(['/edit',student.id]);
  }
}
