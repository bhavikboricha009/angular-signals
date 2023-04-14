import 'zone.js/dist/zone';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name()}}!</h1>
  `,
})
export class App implements OnInit {
  name = signal<string>('Angular');

  ngOnInit() {
    this.name.set('angular');
    this.name.update((v) => v + ' implemented by bhavik');
  }
}

bootstrapApplication(App);
