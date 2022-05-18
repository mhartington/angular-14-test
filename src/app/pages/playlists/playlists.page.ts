import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MusickitService } from '../../providers/musickit-service/musickit-service.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PreviewHeaderComponent } from 'src/app/components/preview-header/preview-header.component';
import { SongItemComponent } from 'src/app/components/song-item/song-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PreviewHeaderComponent,
    SongItemComponent,
    RouterModule
  ]
})
export class PlaylistsPage {
  playlist: any;
  isError: boolean = false;
  constructor(
    private api: MusickitService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.api
      .fetchPlaylist(id)
      .pipe(
        catchError(_e => {
          this.isError = true;
          return EMPTY;
        })
      )
      .subscribe(playlist => {
        this.playlist = playlist;
      });
  }
}
