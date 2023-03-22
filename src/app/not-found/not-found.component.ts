import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  title = "";

  constructor(private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data => {
      this.title = data['title'];
    })
  }

}
