import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        NgIf
    ],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

    public infoForm: FormGroup = new FormGroup({})
    public isSubmitted = false

    public ngOnInit() {
        this.infoForm = new FormGroup({
            //1er paramètre de formControl c'est la valeur par défaut du champ
            email: new FormControl('sly@mail.com', [Validators.email, Validators.required]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            birthdate: new FormControl('', [this.dateValidator, Validators.required]),
            //pour un select mettre la valeur de l'option
            job: new FormControl('asr'),
            newsletter: new FormControl(true),
            knowledge: new FormControl(5, [Validators.min(0), Validators.max(10)]),
        })
    }

    //format pour un champ date le format attendu est yyyy-mm-dd
    private formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    //validation personnalisée
    public dateValidator(control: AbstractControl) {
        console.log(control.value)
        if (control && control.value) {
            if (new Date(control.value) > new Date()) {
                return {greaterthan: true}
            }
        }
        return null
    }

    public onSubmit() {
        //pour savoir si le formulaire a déjà été soumis
        this.isSubmitted = true
        console.log(this.infoForm)
        if (this.infoForm?.valid) {
            //send data to API
            console.log(this.infoForm.value)
        } else {
            console.log("Form invalide !")
        }


    }

}
