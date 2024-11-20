import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  public infoForm = new FormGroup({
    //1er paramètre de formControl c'est la valeur par défaut du champ
    email: new FormControl('sly@mail.com'),
    password: new FormControl(''),
    birthdate: new FormControl(this.formatDate(new Date())),
    //pour un select mettre la valeur de l'option
    job: new FormControl('asr'),
    newsletter: new FormControl(true),
    knowledge: new FormControl(5),
  })

  //format pour un champ date le format attendu est yyyy-mm-dd
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public onSubmit() {
    if (this.infoForm.valid) {
      //send data to API
      console.log(this.infoForm.value)
    } else {
      console.log("Form invalide !")
    }


  }

}
