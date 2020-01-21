import { Injectable } from '@angular/core';
import { princessList } from './princessList.ts'

@Injectable()
export class PrincessService {

  princessList = princessList;

  constructor() { }

}