import {Component, OnInit} from '@angular/core';
import {Joke} from "../../model/joke";
import {Mod8Service} from "../../services/mod8.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-mod8',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe, NgIf],
  providers: [Mod8Service],
  templateUrl: './mod8.component.html',
  styleUrl: './mod8.component.css'
})
export class Mod8Component implements OnInit {

  public joke: Joke | null = null
  public joke2$: Observable<Joke> | null = null
  public joke3: String = ""
  public joke4: Joke | null = null

  constructor(private jokeService: Mod8Service) {
  }


  public getJoke() {
    this.jokeService.getRandomJoke().subscribe(joke => this.joke = joke)
  }

  public getJoke2() {
    this.joke2$ = this.jokeService.getRandomJoke()
  }

  public getJoke3() {
    this.jokeService.getRandomJoke3().subscribe(joke => this.joke3 = joke)
  }

  public getJoke4() {
    this.jokeService.getRandomJoke4().subscribe(joke => this.joke4 = joke)
  }

  ngOnInit(): void {
    this.getJoke()
    this.getJoke2()
    this.getJoke3()
    this.getJoke4()
  }

}
