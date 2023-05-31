import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{name:'Trunks', power: 2300}]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //TODO: emitir el ID del personaje
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id)

  }

}
