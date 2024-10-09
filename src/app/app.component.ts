import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from "./components/mod1/article.component";
import {Mod2Component} from "./components/mod2/mod2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, Mod2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursAngular';
}
