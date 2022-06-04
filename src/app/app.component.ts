import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isToggle = false;
  showAppData = [];
  data = ['app-ts', 'app-html', 'app-css'];
  icon = '+';

  srcToggle() {
    this.isToggle = true;
    console.log('toggle', this.isToggle);
    if (this.isToggle) {
      this.icon = '-';
    } else {
      this.icon = '+';
    }
    this.isToggle == !this.isToggle;
  }

  openAppFolder() {
    if (this.isToggle) {
      this.icon = '-';
    } else {
      this.icon = '+';
    }
    this.showAppData = this.data;
  }
}
