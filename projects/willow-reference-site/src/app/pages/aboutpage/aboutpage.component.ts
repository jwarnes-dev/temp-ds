import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent {
  constructor() { }
  type = TypographyVariant;
} 