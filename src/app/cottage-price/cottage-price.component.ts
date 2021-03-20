import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-cottage-price',
  templateUrl: './cottage-price.component.html',
  styleUrls: ['./cottage-price.component.css']
})
export class CottagePriceComponent implements OnInit {
  sqInModel=.015;

  hello(){

  let width = parseFloat((<HTMLInputElement>document.getElementById("quiltWidth")).value);
  let height = parseFloat((<HTMLInputElement>document.getElementById("quiltHeight")).value);

  let patternRadio = <HTMLInputElement>document.getElementById("patternRadio");


  let volume = width * height;

  // Price Per Square Inch
  let ppsq = volume * this.sqInModel;


  document.getElementById("out").innerHTML = "the price per square inch is " + ppsq;

}


  constructor() { }

  ngOnInit(): void {

  }

}



