import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  //Estas dos linea se definen para enviarle datos al padre
  @Output()
  public nuevoCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 10
  }

  emitCharacter(): void {
    //debugger;
    console.log(this.character);
    if (this.character.name.length === 0) return;

    // {...this.character} se pasa otro objeto y no se pasa como referencia,
    this.nuevoCharacter.emit({...this.character});

    this.character = {name:'',power:0};
  }
}
