import { Component,OnInit } from '@angular/core';
import { Engin } from '../models/engin';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent implements OnInit {
  engins: Engin[] = [];

  ngOnInit(): void {
    const resultats = localStorage.getItem('resultats');
    if (resultats) {
      this.engins = JSON.parse(resultats);
    }
  }
}
