import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  genderList = ["Male", "Female"];

  studentForm !: FormGroup;


  constructor(private formBuilder: FormBuilder, 
    private student: StudentService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name : ['',Validators.required],
      email : ['',Validators.email],
      gender : ['',Validators.required],
      qualification : ['',Validators.required],
      dob : ['',Validators.required],
      mobile : ['',Validators.required],
      discription : ['']
    })
  }

  public working: boolean = true;
  public submitting: boolean = false;
  public submited: boolean = false;
  public exception: boolean = false;
  

  public addStudent(){
    
    console.log("this.studentForm.value.qualification.valid = "+this.studentForm.value.qualification);
    if(this.studentForm.valid){
      this.working = false;
      this.submitting = true;
      this.student.registerStu(this.studentForm.value).subscribe(
        (resp) => {
          this.submitting = false;
          this.submited = true;
          console.log(typeof(resp));
          setTimeout(() => {
            this.dialogRef.close();
          },3000);
          this.router.navigateByUrl("/home");
        },
        (err) => {
          console.log(err);
          this.submitting = false;
          this.working = true;
          this.exception = true;
          // setTimeout(() => {
          //   this.dialogRef.close();
          // },3000);
        }
      )
    }
    else{
      console.log("Gender = "+this.studentForm.value.gender != "")
      console.log("Qualification = "+this.studentForm.value.qualification != null)
    }
    //console.log("this.studentForm.valid = "+this.studentForm.valid)
    //return this.http.post("http://localhost:8081/saveStudent",this.studentForm)
  }

}
