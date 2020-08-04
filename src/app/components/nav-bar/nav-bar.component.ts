import { Component, OnInit} from '@angular/core';
import { images } from 'src/assets/images';
import {selectImage} from 'src/app/app.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  images: Image[] = images; 
  selectedImage: any = 1;

  constructor() { }

  selectImage(i): void {
    console.log(i)
    this.selectedImage = i;
  }

  ngOnInit(): void {
  }

}
