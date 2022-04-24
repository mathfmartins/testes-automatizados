import { UniqueIdService } from './../../../services/unique-id.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {

  constructor(private uniqueIdService: UniqueIdService) { }

  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string = null;

  public fonts = {
    faThumbsUp
  };

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generatedUniqueIdWithPrefix('liked-widget')
    }
  }

  like(): void {
    this.liked.emit();
  }
}
