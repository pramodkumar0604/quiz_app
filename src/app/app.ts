import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NzLayoutModule, NzButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.component.scss'
})
export class App {}
