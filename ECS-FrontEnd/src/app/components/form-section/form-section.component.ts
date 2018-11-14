import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  preguntas = [
    {
    "Name" : "Alfreds Futterkiste",
    "Country" : "Germany",
    "City" : "Berlin"
    },
    {
      "Name" : "Alfreds Futterkiste",
      "Country" : "Germany",
      "City" : "Berlin"
    }
  ];
  
  constructor() { }

  ngOnInit() { 
    
  }

}
