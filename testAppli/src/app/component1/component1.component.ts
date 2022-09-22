import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  title : String = "Titre du Composant 1";
  valid : Boolean = true;
  prenom : String = "titi";
  bonjour : String = "";

  ngOnInit(): void {
    this.title = "Composant initialisé";
  }

  clic () {
    console.log ("clic activé");
    this.valid = false;
  }

  clicChange (val : String) {
    this.bonjour = val;
  }
  ngOnDestroy () {

  }
}
