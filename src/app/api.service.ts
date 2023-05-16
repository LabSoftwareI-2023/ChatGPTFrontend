import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoryDTO } from './models/storyDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getStory(description: string) : Observable<StoryDTO> {
    let json = { "description": description };
    return this.http.post<StoryDTO>("http://localhost:8080/stories", json)
  }


}
