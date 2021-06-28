import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rivaan-plastchem';
  @HostListener("window:scroll", ['$event.target'])onWindowScroll() {
    console.log('scrolling');
  }
}


