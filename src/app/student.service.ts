import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //private subject = new Subject<any>();

  constructor(private http: HttpClient) { }



  public api: string = "http://192.168.0.171:8081/student";

  public registerStu(student: any) {
    return this.http.post(this.api + "/addStudent", student);
  }


  public getAllStudent() {
    return this.http.get(this.api + "/getAll");
  }

  public deleteStu(id: number) {
    return this.http.delete(this.api + "/deleteStu/" + id);
  }

  public updateAll(students: any) {
    return this.http.put(this.api + "/updateAll", students);
  }

  public getSingValue(id: number){
    return this.http.get(this.api+"/getSing/"+id);
  }

  public updateSing(student: any){
    return this.http.put(this.api+"/updateSing",student)
  }

}
