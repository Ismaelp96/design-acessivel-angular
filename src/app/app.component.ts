import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'design-acessivel-angular';

  form!: FormGroup;
  test: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: false,
        },
      ],
    });
  }

  submit(): void {
    this.form.get('yesNoAnswer')?.disable();
    console.log(this.form.value);
  }
}
