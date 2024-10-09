import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mod4Service {

  constructor() { }


  public getVersion() : string{
    return "1.0";
  }
}
