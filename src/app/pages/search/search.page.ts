import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EMPTY } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  switchMap,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import { MusickitService } from '../../providers/musickit-service/musickit-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormatArtworkUrlPipe } from '../..//pipes/formatArtworkUrl/format-artwork-url.pipe';
import { MsToMinsPipe } from '../../pipes/ms-to-mins/ms-to-mins.pipe';
import { SongItemComponent } from '../../components/song-item/song-item.component';
import { ErrorComponent } from '../../components/error-emoji/error-emoji';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormatArtworkUrlPipe,
    RouterModule,
    MsToMinsPipe,
    ReactiveFormsModule,
    SongItemComponent,
    ErrorComponent,
  ],
})
export class SearchPage implements OnInit {
  public searchInput = new FormControl<string>('');
  public state = {
    hasSearch: false,
    isError: false,
    isLoading: false,
    albums: null,
    playlists: null,
  };

  constructor(
    private api: MusickitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  searchCleared() {
    this.state = {
      hasSearch: false,
      isError: false,
      isLoading: false,
      albums: null,
      playlists: null,
    };
    this.router.navigate([]);
  }
  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        filter((term) => {
          if (term) {
            this.state = { ...this.state, isLoading: true, hasSearch: true };
          } else {
            this.searchCleared();
          }
          return !!term;
        }),
        debounceTime(500),
        distinctUntilChanged(),
        tap((term) => {
          this.router.navigate([], { queryParams: { query: term } });
        }),
        switchMap((term: any) => this.api.search(term)),
        catchError(() => {
          this.state = {
            ...this.state,
            isLoading: false,
            isError: true,
            albums: null,
            playlists: null,
          };
          return EMPTY;
        }),
        tap(() => (this.state = { ...this.state, isLoading: false }))
      )
      .subscribe((results: any) => {
        this.state = {
          ...this.state,
          albums: results.albums.data ?? null,
          playlists: results.playlists.data ?? null,
        };
      });

    const qp = this.route.snapshot.queryParams['query'];
    this.searchInput.setValue(qp);
  }
}
