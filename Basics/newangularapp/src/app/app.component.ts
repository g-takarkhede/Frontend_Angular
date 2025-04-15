import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { TmpComponent } from './tmp/tmp.component';
// import { Tmp1Component } from './tmp1/tmp1.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
// import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newangularapp';
}
