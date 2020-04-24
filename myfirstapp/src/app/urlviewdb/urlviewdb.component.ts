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





}
