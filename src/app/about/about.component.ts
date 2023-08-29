import { Component, OnInit } from '@angular/core';
import { faCar, faClock, faHandHoldingUsd, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faCar=faCar;
  faLocation=faLocationArrow;
  faClock=faClock;
  faHand=faHandHoldingUsd;


  constructor() { }

  ngOnInit(): void {
  }

}
