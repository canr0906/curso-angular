import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  public borrado?: string;
  /*public heroName(): string[] {
    return ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  }*/
  deleteHero(): void {
    this.borrado = this.heroName.pop();//splice(this.heroName.length - 1,3).toString();
    //this.heroName
  }
}
