import { Injectable } from '@angular/core';
import { princessList } from './princessList'

@Injectable()
export class PrincessService {

  princessList = princessList;

  constructor() { }

}