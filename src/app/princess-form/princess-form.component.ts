import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PrincessService } from '../princess.service';

@Component({
  selector: 'app-princess-form',
  templateUrl: './princess-form.component.html',
  styleUrls: ['./princess-form.component.css']
})
export class PrincessFormComponent implements OnInit {

  @Output() newPrincess = new EventEmitter();
  princessForm;

  constructor(private fBPrincess: FormBuilder, private princessService: PrincessService) { 
    this.princessForm = this.fBPrincess.group({
      name: '',
      year: 2020,
      like: 0,
      imageUrl:'',
      script:''
    })
  }

  ngOnInit() {
    
  }

  onNewPrincess(princess){
      //alert(princess);
      this.princessService.princessList.push(princess);
      this.newPrincess.emit();
  }

}
