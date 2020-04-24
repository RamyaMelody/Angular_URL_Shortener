import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlShortService } from '../url-short.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-home',
  templateUrl: './url-home.component.html',
  styleUrls: ['./url-home.component.css']
})
export class UrlHomeComponent implements OnInit {
  urlForm; 

  constructor(private urlshortservice: UrlShortService, private router: Router) {
    this.urlForm = new FormGroup({
      'longURL': new FormControl("", Validators.required)
    })

  }

  ngOnInit(): void { }

  sendUrl() {
    if (this.urlForm.valid) {
      console.log(this.urlForm.value);
       this.urlshortservice.postUrl(this.urlForm.value).subscribe((url)=>{
         this.router.navigate([''])
      })
    }

  }

 

}
