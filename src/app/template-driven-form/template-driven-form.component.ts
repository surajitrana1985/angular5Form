import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TemplateDrivenFormComponent implements OnInit {

  model: Object = {
    firstname: '',
    lastname: ''
  };

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log('Form submitted');
  }

}
