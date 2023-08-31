import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public idCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterListDbz: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteChcracter(id?: string): void {
    if ( !id ) return;
    this.idCharacter.emit(id);
  }
}
