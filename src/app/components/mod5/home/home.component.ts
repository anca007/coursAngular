import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router : Router ) {
  }

  public goToRegister(){
    this.router.navigate(['register', 33, 'michel', 12])
  }

  public goToDetail(id: number){
    this.router.navigate(['detail', id])
  }
}
