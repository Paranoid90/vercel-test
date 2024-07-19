import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  ngOnInit() {
    this.pokemons = this.http.get<Observable<any>>('https://pokeapi.co/api/v2/pokemon/ditto');
  }
}
