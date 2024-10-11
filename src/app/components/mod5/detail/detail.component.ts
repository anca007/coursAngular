import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {


  constructor(private route : ActivatedRoute) {
  }

  ngOnInit(){
    if(this.route.snapshot.paramMap.has('id')){
      let id = this.route.snapshot.paramMap.get('id');
      console.log(id)
    }

  }
}
