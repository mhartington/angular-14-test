import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormatArtworkUrlPipe } from 'src/app/pipes/formatArtworkUrl/format-artwork-url.pipe';
import { LazyImgComponent } from '../lazy-img/lazy-img.component';

@Component({
  selector: '[album-preview-item]',
  templateUrl: './album-preview-items.component.html',
  styleUrls: ['./album-preview-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormatArtworkUrlPipe, LazyImgComponent],
})
export class AlbumPreviewItemsComponent {
  @Input() album: any;
  @Input() index?: number;
}
