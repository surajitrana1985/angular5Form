import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ReactiveFormComponent implements OnInit {

  nameForm: FormGroup;
  namePattern: any;
  surnamePatter: any;

  constructor() { }

  ngOnInit() {
    this.namePattern = '^[a-zA-Z]+$';
    this.surnamePatter = '^[a-zA-Z0-9]+$';
    this.nameForm = new FormGroup({
      firstname: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.namePattern)],
        // updateOn: 'blur'
      }),
      lastname: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.surnamePatter)],
        // updateOn: 'blur'
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      })
    }, { updateOn: 'blur' });
  }

}
