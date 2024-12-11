import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mod4demo1Service {

  constructor() {
  }

  public login() {
    const user = {'name': 'Michel'};
    localStorage.setItem('user', JSON.stringify(user))
    return user
  }

  public getUser() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user)
    }
    return null
  }

  public logout(){
    localStorage.removeItem('user')
  }

}
