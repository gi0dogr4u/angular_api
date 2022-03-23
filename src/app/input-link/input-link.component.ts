import { APP_ID, Component, OnInit } from '@angular/core';

import { ShortenApiService } from '../shorten-api.service';

@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.scss']
})
export class InputLinkComponent implements OnInit {

  url = '';
  shorterlinks!: Array<any>;

  constructor(
    private shortenApiService: ShortenApiService
  ) { }

  ngOnInit(): void {
  }

  encurtar() {
    this.shortenApiService.encurtar(this.url).subscribe(links => this.shorterlinks = links);
  }

}
