import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-challenge';
  selectedImage: number = 0;
  showAll: boolean = true;

  selectImage = (i): any => {
    console.log(i)
    this.selectedImage = i;
  }

  toggleFilter = (): any => {
    this.showAll = !this.showAll;
    console.log(this.showAll)
  }
}
