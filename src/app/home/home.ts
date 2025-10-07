import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  showBanner: boolean = true;

  toggleBanner(): void {
    this.showBanner = !this.showBanner;
  }
}
