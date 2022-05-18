import { SwUpdate } from '@angular/service-worker';
import { MusickitConfig } from './providers/musickit-config/musickit-config';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports:[RouterModule, CommonModule]
})
export class AppComponent implements OnInit {
  constructor(
    private swUpdate: SwUpdate,
    public musickitConfig: MusickitConfig
  ) {}
  async ngOnInit() {
    this.swUpdate.checkForUpdate()
        .then(() => this.swUpdate.activateUpdate())
        // .then(() => window.location.reload());
  }

  auth() {
    if (this.musickitConfig.isAuthorized) {
      this.musickitConfig.unauthorize();
    } else {
      this.musickitConfig.authorize();
    }
  }
}
