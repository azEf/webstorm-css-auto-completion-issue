import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // The strategy is inherited by all the child components
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
