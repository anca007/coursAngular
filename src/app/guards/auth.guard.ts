import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {Mod4Service} from "../services/mod4.service";


//ng generate guard guards/auth
//si true le passage autorisé, sinon passage fermé
export const authGuard: CanActivateFn = (route, state) => {


  console.log(route)
  console.log(state)
  //injection de service dans fonction
  let version = inject(Mod4Service).getVersion()

  return version == '2.0';
};
