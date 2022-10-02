import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl('',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ),
    });
    this.submitted = false;
  }

  loginForm;
  submitted;

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}
