import { Component, OnInit } from '@angular/core';
import { UrlShortService } from '../url-short.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-urlviewdb',
  templateUrl: './urlviewdb.component.html',
  styleUrls: ['./urlviewdb.component.css']
})
export class UrlviewdbComponent implements OnInit {
  urlListDB;


  constructor( private urlshortservice: UrlShortService, private router: Router) {
    this.urlshortservice.getURL().subscribe((data) => {
      this.urlListDB = data;
    })
    //console.log(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void { }


  urlCopy(url){
    let short_url = 'https://node-url-shortener-app.herokuapp.com/geturl/'+url
    const copy = document.createElement('input');    
    copy.value = short_url;
    document.body.appendChild(copy);
    copy.focus();
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
   
  }
  delurl(url){
    this.urlshortservice.deleteURL(url).subscribe((data) => {
      let status = data.message;
      if(status == "Deleted Successfully"){
        alert("Deleted Successfully");
        this.router.navigate(['']);
      }
      
    })
  }

  






}
