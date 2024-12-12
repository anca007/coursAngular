import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModTestComponent} from './mod-test.component';
import {TestService} from "../../services/test.service";
import {By} from "@angular/platform-browser";


class MockService {

  public getData() {
    return 'Bernard';
  }

}


describe('ModTestComponent', () => {
  let component: ModTestComponent;
  let fixture: ComponentFixture<ModTestComponent>;

  //Dans les tests Angular, la fixture joue un rôle crucial :
  // elle agit comme une interface entre le composant Angular et le DOM dans un environnement de test.
  // Elle permet d'accéder à l'instance du composant, de simuler des interactions, et de manipuler ou vérifier l'état du DOM.

  //permet de charger le composant
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModTestComponent],
      //cet ajout permet de remplacer le service à utiliser dans le test
      providers: [{provide: TestService, useClass: MockService}],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //vérifie que le composant a bien été créé
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Vérifie la logique de ngOnInit et l'initialisation
  it('should initialize username to "Michel"', () => {
    // à partir de component on a accès à nos attributs
    expect(component.username).toBe('Michel');
  });

  //accéder aux éléments HTML grace à fixture
  it('should h1 contains Hello Michel', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Hello Michel')
    // expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Hello Sylvain')
  });

  //ajouter un bouton qui change le nom de l'utilisateur
  //puis tester la mise à jour du username
  it('should change username on button click', () => {
    const button = fixture.nativeElement.querySelector('button');

    button.click(); // Simule un clic sur le bouton
    fixture.detectChanges(); // Met à jour le DOM après le clic

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Hello Robert');
  });

  //tester avec un service, si on fait un test classique on va tester la logique du service et le composant
  //dans l'idéal il faut mocker les services pour isoler le composant


  //ajout vérification template driven-form
  it('should bind input value to username property', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    // Vérifie la valeur initiale
    expect(inputElement.value).toBe('');

    // Simule une saisie utilisateur
    inputElement.value = 'Michel';
    inputElement.dispatchEvent(new Event('input'));

    // Vérifie que le modèle est mis à jour
    expect(component.username).toBe('Michel');

    // Met à jour le modèle et vérifie l'input
    component.username = 'UpdatedValue';
    fixture.detectChanges();
    expect(inputElement.value).toBe('UpdatedValue');
  });


  // reactive form
  it('should bidule', () => {
    const input = fixture.nativeElement.querySelector('#password')

    expect(input.value).toBe('')

    input.value = 'coucou';
    input.dispatchEvent(new Event('input'))

    //form -> formgroup ->
    expect(component.form.get('password')?.value).toBe('coucou')

  })


});
