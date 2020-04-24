import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlShortService } from '../url-short.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  id;

  constructor(private activatedRoute: ActivatedRoute, private urlshortservice: UrlShortService, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id
    console.log(this.id)
    this.urlshortservice.getlongURL(this.id).subscribe((data) => {
      console.log(data.data.longURL)
      window.open(data.data.longURL, "_self")
    })
  }

  ngOnInit(): void {
  }

}
