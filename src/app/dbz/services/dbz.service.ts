import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id:   uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id:   uuid(),
    name: 'Goku',
    power: 9500
  },{
    id:   uuid(),
    name: 'Vegeta',
    power: 9000
  }];

  onNewCharacter(nuevoCharacter: Character): void {
    //console.log('MainPage:');
    //console.log(nuevoCharacter);
    nuevoCharacter.id?.replace('',uuid());
    //            O
    // se crea un objeto donde se genera su ID y con ...nuevo caracter se le indica que tome todas la spropiedas y las esparza
    //por todo el nuevo onjeto
    const newCharacter: Character = {id:uuid(),...nuevoCharacter};
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string): void {
    //this.characters.splice(id,1);
    this.characters = this.characters.filter(c => c.id !== id);
  }

}
