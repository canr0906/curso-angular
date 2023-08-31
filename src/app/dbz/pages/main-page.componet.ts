import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService ) {}

  // Cuando vas a emitir valores a un Hijo u otro componente en el selector correspondiente ponemos solo el nombre de este metodo
  get characters(): Character[] {
    return this.dbzService.characters;
  }

  deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
