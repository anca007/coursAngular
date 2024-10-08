import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleComponent} from "./components/article/article.component";
import {Mod2demo1Component} from "./components/mod2demo1/mod2demo1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, Mod2demo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursAngular';
}
