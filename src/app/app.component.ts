import { Component, } from '@angular/core';
import { images, Image } from 'src/assets/images';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-challenge';
  images: any = images; 
  selectedImages = this.images;

  selectImage = (i): any => {
    this.selectedImages = [this.images[i]];
  }

  toggleFilter = (): any => {
    this.selectedImages = this.images;
  }
}
