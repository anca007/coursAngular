import {Component} from '@angular/core';

@Component({
  selector: 'app-mod1',
  standalone: true,
  imports: [],
  template: `
    <p>
      article works!
    </p>
  `,
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  public test: string = "HEllo !"


  ngOnChanges(): void {
    console.log(1)
  }

  ngOnInit() {
    console.log(2)
  }

  ngDoCheck() {
    console.log(3)
  }

  ngAfterContentInit() {
    console.log(4)
  }

  ngAfterContentChecked() {
    console.log(5)
  }

  ngAfterViewInit() {
    console.log(6)
  }

  ngAfterViewChecked() {
    console.log(7)
  }

  ngOnDestroy() {
    console.log(8)
  }

}
