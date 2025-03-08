import { Component } from '@angular/core';
import { Engin } from '../models/engin';
import { EnginService } from '../services/Engins/engin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Veuillez entrer un numéro d'immatriculation.",
      });
      return;
    }

    this.enginService.getEnginsByImmatriculation(this.immatriculation)
      .subscribe({
        next: (data) => {
          if (data.length > 0) {
            localStorage.setItem('resultats', JSON.stringify(data));
            this.erreur = '';
            this.router.navigate(['resultats']);
          } else {
            Swal.fire({
              icon: "info",
              title: "Aucun résultat",
              text: "Aucun engin trouvé pour cette immatriculation."
            });
          }
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Une erreur est survenue lors de la recherche."
          });
        }
      });
  }
}
