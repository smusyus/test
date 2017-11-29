import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../css/heroes.component.css',
              '../css/hero-search.component.css',
            ]
})
export class HeroesComponent implements OnInit {
  // TEST
  selectedHero: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
