import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-fest';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AboutPage() {
    this.router.navigateByUrl("/about");
  }
}
