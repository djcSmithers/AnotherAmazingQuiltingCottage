import { Component, OnInit } from '@angular/core';
import { Instafeed } from '../../assets/JS/instafeed.min';

declare var Instafeed: any;


@Component({
  selector: 'app-cottage-gallery',
  templateUrl: './cottage-gallery.component.html',
  styleUrls: ['./cottage-gallery.component.css']
})
export class CottageGalleryComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    //JSON response version
this.getToken('https://ig.instant-tokens.com/users/386d2239-721c-46c4-a2ee-ee8dbfc7181d/instagram/17841439937546638/token?userSecret=pjvjn5ybd0hfniy7sxua0l', function(responseText) {
  if (responseText){
    var response = responseText;
    let json = JSON.parse(response);
    let token = json.Token;

  let feed = new Instafeed({
        accessToken: token,
        resolution: 'standard_resolution',
        template: '<a href="{{link}}"><img src="{{image}}"style="margin: 0 10px 0 0; width: 173px; height: 173x;"/></a>'
      });
      feed.run();
  }
});



}
  

getToken(myurl, cb) {

  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      if (typeof cb === 'function') cb(req.responseText);
    }
  }

  req.open("GET", myurl, true);
  req.send();
  
}


}