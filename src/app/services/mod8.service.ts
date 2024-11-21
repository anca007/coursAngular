import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Joke} from "../model/joke";

@Injectable({
  providedIn: 'root'
})
export class Mod8Service {

  constructor(private http : HttpClient) {
  }

  private readonly BASE_URL = "https://api.chucknorris.io/jokes/"

  public getRandomJoke(){
    return this.http.get<Joke>(this.BASE_URL + "random")
  }


}
