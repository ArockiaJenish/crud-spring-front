import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  getSingValue(id: number) {
    this.service.getSingValue(id).subscribe(
      (res) => {
        //console.log(res);
        this.student = res;
        console.log("------this.student----");
        console.log(this.student);
      },
      (err) => {
        console.log(err);
      }
    )
    //throw new Error('Method not implemented.');
  }

  public student: any;

  public studentForm !: FormGroup;

  constructor(private router: ActivatedRoute,
    private service: StudentService,
    private formBuilder: FormBuilder,
    private routers: Router
  ) {
    let id = Number(this.router.snapshot.paramMap.get("id"));
    console.log("Inside edit component id = " + id);
    //this.student = id;
    this.getSingValue(id);
  }

  //public genderList = ["Male", "Female"];

  ngOnInit(): void {

    console.log("this.student = "+this.student);
    if (this.student !== undefined)
      console.log(this.student.name);



  }

  //Updating student....
  public updateStu() {
    
    this.service.updateSing(this.student).subscribe(
      (res) =>{
        this.student = res;
        this.routers.navigateByUrl("/allStu")
        alert(this.student.name+" updated Sucessfully");
      },
      (err) => alert("Some problem accured")
    )

  }
}
