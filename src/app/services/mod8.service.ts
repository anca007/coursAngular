import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Joke} from "../model/joke";
import {catchError, map, of, retry, switchMap, tap} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Injectable({
  providedIn: 'root'
})
export class Mod8Service {

  constructor(private http: HttpClient) {
  }

  private readonly BASE_URL = "https://api.chucknorris.io/jokes/"

  public getRandomJoke() {
    return this.http.get<Joke>(this.BASE_URL + "random")
  }

  public getRandomJoke3() {
    //on transforme l'observable de Joke à String
    return this.http.get<{ value: String }>(this.BASE_URL + "random").pipe(
      //transforme les données
      map(joke => joke.value),
      //recommence 2 fois l'appel si erreur avant d'arrêter,
      // provoquer une erreur en envoyant une url fausse
      retry(2),
      //permet de traiter les erreurs
      catchError(error => {
        console.error("Erreur lors de la récupération de la blague :", error);
        return of("Une erreur est survenue" as String);
      })
    )
  }

  public getRandomJoke4() {
    //type any permet de mapper comme on l'entend les données
    return this.http.get<any>(this.BASE_URL + "random").pipe(
      //tap ne modifie en rien les données, top pour débug ou log
      tap(response => console.log(response)),
      //ici je crée un objet avec un mapping manuel
      map(response => {
        return {
          value: response.value,
          iconUrl: response.icon_url,
          id: response.id,
        } as Joke
      }),
    )
  }

  public getRandomJoke5() {
    return this.http.get<Joke>(this.BASE_URL + "random").pipe(
      switchMap(
        joke => {
          //permet de faire un appel qui dépend d'un autre et modifier l'observable récupérer
          let value = joke.value //simulation
          return this.http.get<String>(this.BASE_URL + "random")
        }
      )
    )
  }

  //autres méthodes appelables dans le pipe
  //distinctUntilChanged() ->  Ignore les valeurs consécutives identiques.
  // filter() ->  Filtre les données, n'émettant que celles qui correspondent à une condition.
  // mergeMap() -> Combine plusieurs flux en un seul (similaire à switchMap mais ne remplace pas les flux en cours).


}
