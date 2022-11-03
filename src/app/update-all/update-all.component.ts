import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActionComponent } from '../action/action.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-all',
  templateUrl: './update-all.component.html',
  styleUrls: ['./update-all.component.css']
})


export class UpdateAllComponent implements OnInit {

  constructor(private student: StudentService, 
    private dialog: MatDialog, 
    // private dialogRef: MatDialogRef<ActionComponent>,
    private router: Router,
    ) { }


  public stuDetails: any;

  ngOnInit(): void {
    this.student.getAllStudent().subscribe(
      (res) => {
        this.stuDetails = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  


  public update() {
    console.log(this.stuDetails);
    this.openDialog();

    this.router.navigateByUrl("/home");
    this.student.updateAll(this.stuDetails).subscribe(
      (res) => {
        console.log(res);
        //this.openDialog();
        //this.student.changeAction();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  private openDialog() {
    this.dialog.open(ActionComponent, {
      width: '50%'
    });

    // setTimeout(() => {
    //   this.dialogRef.close();
    // }, 3000);
  }



}
