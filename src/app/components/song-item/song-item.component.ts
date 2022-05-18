import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormatArtworkUrlPipe } from 'src/app/pipes/formatArtworkUrl/format-artwork-url.pipe';
import { MsToMinsPipe } from 'src/app/pipes/ms-to-mins/ms-to-mins.pipe';
import { LazyImgComponent } from '../lazy-img/lazy-img.component';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormatArtworkUrlPipe, LazyImgComponent, MsToMinsPipe],
})
export class SongItemComponent {
  @Input() song: any;
  @Input() index?: number;
  constructor() {}
}
