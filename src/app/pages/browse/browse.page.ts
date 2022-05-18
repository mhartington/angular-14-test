import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumPreviewItemsComponent } from 'src/app/components/album-preview-items/album-preview-items.component';
import { LazyImgComponent } from '../../components/lazy-img/lazy-img.component';
import { MusickitService } from '../../providers/musickit-service/musickit-service.service';

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    LazyImgComponent,
    AlbumPreviewItemsComponent,
  ],
  standalone: true,
})
export class BrowsePage implements OnInit {
  isLoading = true;
  topAlbums: any;
  topPlaylists: any;
  constructor(private api: MusickitService) {}
  ngOnInit() {
    if (this.isLoading) {
      this.api.fetchChart().subscribe((data) => {
        this.topAlbums = data.albums[0].data;
        this.topPlaylists = data.playlists[0].data;
        this.isLoading = false;
      });
    }
  }
}
