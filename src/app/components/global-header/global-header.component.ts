import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../models/Content";
import {ContentDefaultQueryRepository} from "../../repositories/contents/content.default.query";

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent  implements OnInit {

  @Input() title?: string;
  searchedContents: Content[] = [];
  constructor(
    private contentDefaultRepository: ContentDefaultQueryRepository,
  ) { }


  ngOnInit() {}


  async globalSearch($event: any) {
    if ($event.target.value === '') {
      this.searchedContents = []
      return;
    }
    await this.contentDefaultRepository.searchContent($event.target.value)
      .then((res: Content[]) => this.searchedContents = res.slice(0, 5));
  }
}
