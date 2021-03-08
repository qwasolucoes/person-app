import { Component } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'person-web';

  backendContent = '';

  constructor(
    private personService: PersonService
  ) {

  }
  
  getDataFromBackend() {
    this.personService.getPeople().subscribe(
      response => {;
        this.backendContent = response.name
      },
      error => {
        console.error('Fail getting backend response', error);
      }
    )
  }
}
