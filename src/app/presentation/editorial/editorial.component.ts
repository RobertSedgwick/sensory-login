import { Component, Input } from '@angular/core';

export interface EditorialComponentConfig {
  image?: string;
  video?: string;
  heading: string;
  text: string;
}
@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent {
  @Input() config: EditorialComponentConfig;
}
