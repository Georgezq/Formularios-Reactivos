import { Component, Input } from '@angular/core';
import { FormEditarComponent } from '../components/form-editar/form-editar.component';
import { ProfileEditorComponent } from '../components/profile-editor/profile-editor.component';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormEditarComponent, ProfileEditorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  newName: string = 'Joshy';

}
