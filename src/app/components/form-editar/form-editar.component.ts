import { Component, Input, Output, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-editar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-editar.component.html',
  styleUrl: './form-editar.component.css'
  
})
export class FormEditarComponent {

  name = new FormControl('');

  @Input() newName: string;



  updateName() {
    this.name.setValue(this.newName);
  }



}
