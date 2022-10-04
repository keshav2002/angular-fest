import { Component, OnInit } from '@angular/core';
import { FakeDataRepo } from './FakeDataRepo';

export interface InfoRepo {
  title: string;
  desc: string;
  selected: boolean;
}

export interface InfoCard {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  categories: InfoRepo[] = [];

  displayCard: InfoCard = { title: 'Nothing selected', desc: '' };

  tabs = ['Java', 'Javascript', 'Python', 'C++'];

  constructor() { }

  ngOnInit(): void {
    let dataRepo = new FakeDataRepo();
    let temp: any = dataRepo.requestData("Java");
    this.categories = [];
    for (let i = 0; i < temp.length; i++) {
      this.categories.push({ title: temp[i].title, desc: temp[i].desc, selected: temp[i].selected });
    }
  }

  tabClick(tab: any) {
    let dataRepo = new FakeDataRepo();
    let temp: any = dataRepo.requestData(this.tabs[tab.index]);
    this.categories = [];
    for (let i = 0; i < temp.length; i++) {
      this.categories.push({ title: temp[i].title, desc: temp[i].desc, selected: temp[i].selected });
    }
  }

  changeSelected(idx: number) {
    for (let i = 0; i < this.categories.length; i++) {
      if (i == idx) {
        if (this.categories[i].selected == true) {
          this.displayCard = { title: 'Nothing selected', desc: '' };
        }
        else {
          this.displayCard = { title: this.categories[i].title, desc: this.categories[i].desc };
        }
        this.categories[i].selected = !(this.categories[i].selected);
      }
      else {
        this.categories[i].selected = false;
      }
    }
  }
}
