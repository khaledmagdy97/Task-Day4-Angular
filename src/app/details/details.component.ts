import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  Id : Number=0;
  constructor(myActivate:ActivatedRoute) {
    console.log(myActivate);
    this.Id = myActivate.snapshot.params["id"];
  }
}
