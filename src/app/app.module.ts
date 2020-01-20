import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincessListComponent } from './princess-list/princess-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PrincessListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
