import { Component, OnInit } from '@angular/core';

import { PrincessService } from '../princess.service';

@Component({
  selector: 'app-princess-list',
  templateUrl: './princess-list.component.html',
  styleUrls: ['./princess-list.component.css']
})
export class PrincessListComponent implements OnInit {

  princesses = this.princessService.princessList;
  showAddPrincess: boolean = false;

  constructor(private princessService: PrincessService) { }

  ngOnInit() {
    
  }

  like(princessId){
    this.princesses[princessId].like++;
    this.princesses.sort((a,b) => b.like - a.like);
  }

  addPrincess(){
    this.showAddPrincess = !this.showAddPrincess;
    //this.princesses.push({ name: 'Philippe', year: 2019, imageUrl:'', script: 'c\'est rigolo', like: 0});
  }
}