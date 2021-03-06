import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'error-emoji',
  template: `
    <div class="wrapper">
      <svg
        id="shruggie"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 100"
      >
        <line x1="25" y1="32" x2="50" y2="32" class="shrug hand-l" />
        <line x1="55" y1="30" x2="65" y2="60" class="shrug forearm-l" />
        <line x1="70" y1="65" x2="95" y2="65" class="shrug shoulder-l" />
        <path d="M100,23 Q80,43 100,65" class="shrug head" />
        <path d="M105,25 Q107,30 108,35" class="shrug head eye-l" />
        <path d="M119,25 Q120,30 119,35" class="shrug head eye-r" />
        <path d="M110,60 Q135,60 135,33" class="shrug smile" />
        <path d="M135,23 Q155,43 135,65" class="shrug head" />
        <line x1="140" y1="65" x2="165" y2="65" class="shrug shoulder-r" />
        <line x1="170" y1="60" x2="180" y2="30" class="shrug forearm-r" />
        <line x1="185" y1="32" x2="210" y2="32" class="shrug hand-r" />
      </svg>
    </div>
    <h3>
      Well this is embarrassing, there seems to be an issue fetching data!
    </h3>
  `,
  styleUrls: ['./error-emoji.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ErrorComponent {}
