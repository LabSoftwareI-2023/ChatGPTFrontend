import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { StoryDTO } from './models/storyDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  storyDTO!: StoryDTO;

  constructor(private apiService: ApiService) {

  }

  getStory() {
    this.apiService.getStory("Hola soy juan").subscribe(story => {
      this.storyDTO = story;
    });
  }


}
