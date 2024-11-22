import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-mod-test',
  standalone: true,
  imports: [],
  templateUrl: './mod-test.component.html',
  styleUrl: './mod-test.component.css'
})
export class ModTestComponent implements OnInit{

  public username! : string

  constructor(private testService : TestService) {
  }

  ngOnInit(): void {
    // this.username = 'Michel'
    this.username = this.testService.getData()
  }

  public changeUsername(){
    this.username = "Robert"
  }
}
