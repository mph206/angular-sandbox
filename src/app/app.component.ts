import { Component, } from '@angular/core';
import { images, Image } from 'src/assets/images';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-challenge';
  showAll: boolean = true;
  images: any = images; 
  selectedImage = this.images;


  selectImage = (i): any => {
    console.log(i)
    this.selectedImage = [this.images[i]];
    console.log(this.selectedImage)
  }

  toggleFilter = (): any => {
    this.selectedImage = this.images;
    // this.showAll = true;
    console.log(this.selectedImage)
    console.log(this.images)

  }
}
