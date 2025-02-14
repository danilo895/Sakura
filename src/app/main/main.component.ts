import { Component } from '@angular/core';
import { DishesComponent } from "./dishes/dishes.component";
import { StartscreenComponent } from "./startscreen/startscreen.component";
import { NavbarComponent } from "../utility/navbar/navbar.component";

@Component({
  selector: 'main',
  imports: [
    DishesComponent,
    StartscreenComponent,
    NavbarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true
})
export class MainComponent {

}
