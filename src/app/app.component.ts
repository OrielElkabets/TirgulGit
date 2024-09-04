import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OeButtonComponent } from "./components/oe-button/oe-button.component";
import { ElazarComponent } from "./components/elazar/elazar.component";
import { YairComponent } from "./components/yair/yair.component";
import { YaButtonComponent } from "./components/ya-button/ya-button.component";
import { RafyButtonComponent } from "./components/rafy-button/rafy-button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, OeButtonComponent, ElazarComponent, YairComponent, YaButtonComponent, RafyButtonComponent]
})
export class AppComponent {
  title = 'TirgulGit';
}
