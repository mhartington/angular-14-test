import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PreviewHeaderComponent } from '../../components/preview-header/preview-header.component';
import { SongItemComponent } from '../../components/song-item/song-item.component';
import { MusickitService } from '../../providers/musickit-service/musickit-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PreviewHeaderComponent,
    SongItemComponent,
    RouterModule,
  ],
})
export class AlbumPage {
  album: any;
  isError = false;
  constructor(private api: MusickitService, private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.api
      .fetchAlbum(id)
      .pipe(
        catchError((_e) => {
          this.isError = true;
          return EMPTY;
        })
      )
      .subscribe(
        (album) => (this.album = album),
        (err) => console.log('err', err)
      );
  }
}
