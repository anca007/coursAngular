import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from "./components/mod1/article.component";
import {Mod2Component} from "./components/mod2/mod2.component";
import {Mod4Component} from "./components/mod4/mod4.component";
import {HomeComponent} from "./components/mod5/home/home.component";
import {FormComponent} from "./components/mod6/form/form.component";
import {Mod8Component} from "./components/mod8/mod8.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, Mod2Component, Mod4Component, HomeComponent, FormComponent, Mod8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursAngular';
}
