import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Progromeetr';
  isNavMenuHidden = true;
  isUserMenuHidden = true;

  toggleNavMenu(): void {
    this.isUserMenuHidden = true;
    this.isNavMenuHidden = !this.isNavMenuHidden;
  }

  toggleUserMenu(): void {
    this.isNavMenuHidden = true;
    this.isUserMenuHidden = !this.isUserMenuHidden;
  }
}
