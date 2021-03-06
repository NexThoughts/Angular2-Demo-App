import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from '@angular/router-deprecated';
import {HeroDetailComponent} from "./hero-detail.component";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives:[HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    heroes:Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;

    constructor(private heroService:HeroService, private router:Router) {
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
    }

    goToDetail() {
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
} 
