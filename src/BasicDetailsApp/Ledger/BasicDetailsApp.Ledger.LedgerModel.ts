import {
  NgForm,
    FormGroup,
      FormControl,
        Validators,
    FormBuilder
} from '@angular/forms';

export class LedgerModel {
  LedgerId = 0;
  LedgerName = '';
  LedgerCode = '';
  formLedgerGorup: FormGroup = null;
  constructor(){
    // tslint:disable-next-line: variable-name
    var _builder = new FormBuilder();
    this.formLedgerGorup = _builder.group({});

    this.formLedgerGorup.addControl('LedgerNameControl',
      new FormControl('', Validators.required));

    var validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));

    this.formLedgerGorup.addControl('LedgerCodeControl',
      new FormControl('', Validators.compose(validationCollection)));
  }
}
