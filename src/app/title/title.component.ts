import { Component } from '@angular/core';

@Component({
  selector: 'music-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  music = 'Little Sunshine';
  artist = 'Ghost';
}
