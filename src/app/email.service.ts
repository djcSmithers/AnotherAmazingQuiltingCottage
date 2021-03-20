import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  imagesChangedEvent = new Subject<String[]>();
  // images: String[] = [];
  images;

  sendMessage(body){

    if (body){

    let headers = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    };
    
    let jsonBody = JSON.stringify(body);

    return this.http.post("http://localhost:3000/email",jsonBody,headers);
  }
}

getFiles(){

  let headers = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

    // this.http.get<{ message: string, images: String[] }>('http://localhost:3000/files', headers).subscribe(
    //   // success function
    // (response) => {
    //   this.images = response.images;
    //   }
    // ),
    //   (error: any) => {
    //     console.log(error);
    //   }

        this.http.get<{ message: string, images: String[] }>('http://localhost:3000/files', headers).subscribe(
          // success function
        (response) => {
          console.log(response);
          this.images = response;
          this.imagesChangedEvent.next(this.images);
          }
        ),
          (error: any) => {
            console.log(error);
          } 
      }




}

  // console.log("calling files route...");
  // return this.http.get("http://localhost:3000/files", headers);