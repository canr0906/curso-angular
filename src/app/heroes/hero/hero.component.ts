import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 35;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(name: string): void {
    //throw 'Metodo aun no implemetado';
    this.name = name;
  }

  changeAge(age: number): void {
    //throw 'Metodo aun no implemetado';
    this.age = age;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age  = 35;
  }

}
