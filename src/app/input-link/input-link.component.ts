import { APP_ID, Component, OnInit } from '@angular/core';

import { ShortenApiService } from '../shorten-api.service';

@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss']
})
export class InputLinkComponent implements OnInit {

  shorterlinks: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  encurtar() {
    this.shortenApiService.encurtar().subscribe(links => this.shorterlinks = links);
  }

}
