import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleInterestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
