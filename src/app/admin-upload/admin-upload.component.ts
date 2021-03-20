import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-upload',
  templateUrl: './admin-upload.component.html',
  styleUrls: ['./admin-upload.component.scss']
})
export class AdminUploadComponent implements OnInit {

  imageForm: FormGroup;
  imageList: string[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.imageForm = new FormGroup({
      'images': new FormControl(null, Validators.required)
    });
  }

  handleFileInput(files: FileList) {

    Array.from(files).forEach(file => { 
      this.imageList.push(file.name);
    });

  }

private onSubmit(){
  // this.images = this.imageForm.value['images'];
  console.log(this.imageList);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const strImages = JSON.stringify(this.imageList);

    this.http.post<{message: string}>('http://loclhost:3000/admin/images', strImages, {headers: headers});

  }

}
