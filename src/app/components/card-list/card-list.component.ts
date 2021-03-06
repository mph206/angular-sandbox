import { Component, OnInit, Input } from '@angular/core';
import { images, Image } from 'src/assets/images';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() selectedImages: Image[];

  constructor() { }

  ngOnInit(): void {
  }

}
