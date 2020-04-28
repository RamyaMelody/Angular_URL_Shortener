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


  constructor(private urlshortservice: UrlShortService, private router: Router) {
    this.urlshortservice.getURL().subscribe((data) => {
      this.urlListDB = data;
    })
  }

  ngOnInit(): void { }


urlCopy(url){
    let short_url = 'http://localhost:3000/geturl/'+url
    const copy = document.createElement('input');    
    copy.value = short_url;
    document.body.appendChild(copy);
    copy.focus();
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
    alert("URL copied successfully")
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
