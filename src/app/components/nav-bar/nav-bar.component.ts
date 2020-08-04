import { Component, OnInit, Input} from '@angular/core';
import { images } from 'src/assets/images';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  images: Image[] = images; 
  @Input() selectImage: any;
  @Input() toggleFilter: any;


  constructor() { }

  ngOnInit(): void {
  }

}
