import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})


export class ActionComponent implements OnInit {

  constructor(private service: StudentService) { }

  public updated: boolean = false;
  public updating: boolean = true;

  public changeAction(){
    this.updated = true;
    this.updating = false;
  }

  ngOnInit(): void {
    
  }

}
