import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.custom';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vercel-test';
  private http = inject(HttpClient);

  pokemons = new Observable<any>();

<<<<<<< HEAD
  envVar = environment.apiUrl;
=======
  apiUrl = environment.apiUrl;
>>>>>>> 80f089308578484c1a7d71af73e312ab88cbaecc

  ngOnInit() {
    this.pokemons = this.http.get<Observable<any>>('https://pokeapi.co/api/v2/pokemon?limit=100');
  }
}
