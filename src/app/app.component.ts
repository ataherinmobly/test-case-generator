import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICommand, IQueryParam, IFaker } from './shared/models/models';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disableSelect = new FormControl(false);
  command: ICommand;
  temp: ICommand;
  commands: ICommand[];
  constructor() {
    this.command = {} as ICommand;
    this.command.queryParams = {} as IQueryParam;
    this.command.faker = {} as IFaker;

    this.temp = {} as ICommand;
    this.temp.queryParams = {} as IQueryParam;
    this.temp.faker = {} as IFaker;
    this.commands = [];
    this.commands.push(this.temp);
  }
  resetCommand(index) {
    console.log('called', index);
    this.commands[index].faker = {} as IFaker;
    this.commands[index].queryParams = {} as IQueryParam;
    Object.keys(this.commands[index]).forEach(key => {
      if (key !== 'faker' && key !== 'queryParams' && key !== 'type') {
        this.commands[index][key] = null;
      }
    });
  }
  addCommand() {
    const temp = {} as ICommand;
    temp.queryParams = {} as IQueryParam;
    temp.faker = {} as IFaker;
    this.commands.push(temp);
  }
  drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
    moveItemInArray(this.commands, event.previousIndex, event.currentIndex);
  }
  generateTest() {
    console.log(this.commands);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.commands));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute('href', dataStr);
    const fileName = prompt('Enter file name');
    dlAnchorElem.setAttribute('download', fileName + '.json');
    dlAnchorElem.click();
  }
}
