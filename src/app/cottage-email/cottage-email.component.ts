import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl, FormArray} from '@angular/forms';
import { Subscription } from 'rxjs';
import {EmailService} from '../email.service';
import { QuiltOrder } from './cottage-email.model';
// import { imgFolder } from '../../assets/quiltDesigns';

interface designIcon {
  value: string;
  viewValue: string;
  img:string;
}


@Component({
  selector: 'app-cottage-email',
  templateUrl: './cottage-email.component.html',
  styleUrls: ['./cottage-email.component.css']
})
export class CottageEmailComponent implements OnInit, OnDestroy {

  images: String[] = [];
  title = 'nodeMailerApp';
  nodeMailerForm :FormGroup
  private imagesSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {

    this.emailService.getFiles();

    this.imagesSubscription = this.emailService.imagesChangedEvent.subscribe((images: String[]) => {
      this.images = images;
      console.log(this.images);
      // this.filterRecipes();
    });

    // this.nodeMailerForm = this.formBuilder.group({email:[null,[Validators.required]]

    this.nodeMailerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      // 'width': new FormControl(null),
      // 'height': new FormControl(null, Validators.required),
      // 'design': new FormControl(null, Validators.required),
      // 'material': new FormControl(null, Validators.required),
      //this will be where Pattern selection will be added
    });

    };

    ngOnDestroy(){
      this.imagesSubscription.unsubscribe();
    }

  sendMail(){
    alert("Email has been sent");

    let quiltOrder = new QuiltOrder(
      this.nodeMailerForm.value['name'],
      this.nodeMailerForm.value['email'],
      this.nodeMailerForm.value['width'],
      this.nodeMailerForm.value['height'],
      this.nodeMailerForm.value['design'],
      this.nodeMailerForm.value['material']
      //Need to add the pattern selection to NodeMailer
    );
    
    this.emailService.sendMessage(quiltOrder).subscribe(data=>{console.log(data);
    })

  }
  
  // // Icon select
  // designIcons: designIcon[] = [
  //   {value: 'design-0', viewValue: 'bubbles' , img: '../assets/quiltDesigns/Bubbles.jpg'},
  //   {value: 'design-0', viewValue: 'meandering' , img: '../assets/quiltDesigns/meandering 1.jpg'}
  // ];

  test(){
    // this.emailService.getFiles();liusdlgb
    this.images.forEach(e => {
      // console.log(e);
      console.log('../../assets/quiltDesigns/' + e.toString());
    });
  }

}

