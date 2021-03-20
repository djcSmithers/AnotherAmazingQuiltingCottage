import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './users.model';

@Component({
  selector: 'app-quilt-login',
  templateUrl: './quilt-login.component.html',
  styleUrls: ['./quilt-login.component.scss']
})
export class QuiltLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  
  private initForm(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  private async onSubmit(){

    let newUser = new User(this.loginForm.value['username'], this.loginForm.value['password']);

    let strUser = JSON.stringify(newUser);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
try{
  await this.http.post<{message: string}>('http://loclhost:3000/admin/login', strUser, {headers: headers});
} catch{
}

  }

}
