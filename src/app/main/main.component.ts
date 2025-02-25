import { Component } from '@angular/core';
import { Engin } from '../models/engin';
import { EnginService } from '../services/Engins/engin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  immatriculation: string = '';
  erreur: string = '';

  constructor(
    private enginService: EnginService,
    private router: Router
  ) {}

  rechercherEngin() {
    if (this.immatriculation.trim() === '') {
      this.erreur = "Veuillez entrer un numéro d'immatriculation.";
      return;
    }

    this.enginService.getEnginsByImmatriculation(this.immatriculation)
      .subscribe({
        next: (data) => {
          if (data.length > 0) {
            localStorage.setItem('resultats', JSON.stringify(data));
            this.erreur = '';
            this.router.navigate(['resultats'])
          } else {
            this.erreur = "Aucun engin trouvé pour cette immatriculation.";
          }
        },
        error: (err) => {
          console.error(err);
          this.erreur = "Une erreur est survenue.";
        }
      });
  }
}
