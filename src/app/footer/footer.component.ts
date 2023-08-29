import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleLeft, faArrowLeft, faArrowRight, faCoffee, faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCoffee = faCoffee;
  faTwitter=faTwitter;
  faLinkedIn=faLinkedinIn;
  faInstagram=faInstagram;
  faFacebook=faFacebook;
  faGlobe=faGlobe;
  faArrow=faArrowRight;
  constructor() { }

  ngOnInit(): void {
  }

}
