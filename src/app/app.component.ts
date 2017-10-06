import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

/**
 * App Module
 */
@Component({
    selector: 'my-app',
    template: `
    <form [formGroup]="myForm" (submit)="submit()">
     <div class="form-group">
        <label class="center-block">Name:
            <input class="form-control" formControlName="name">
        </label>
     </div>

     <div class="form-group">
        <label for="sports">Sports</label>
        <ej-dropdownlist id='sports' [dataSource]='sportsData' [fields]='fields' formControlName="sports"></ej-dropdownlist>
      </div>

     <div class="submitted-message">
        <p>Your hero, {{ myForm.value | json }}!</p>
     </div>
    </form>
    `
})
export class AppComponent {

    public sportsData: Object[] = [
        { Id: 'Game1', Game: 'American Football' },
        { Id: 'Game2', Game: 'Badminton' },
        { Id: 'Game3', Game: 'Basketball' },
        { Id: 'Game4', Game: 'Cricket' },
        { Id: 'Game5', Game: 'Football' },
        { Id: 'Game6', Game: 'Golf' },
        { Id: 'Game7', Game: 'Hockey' },
        { Id: 'Game8', Game: 'Rugby' },
        { Id: 'Game9', Game: 'Snooker' },
        { Id: 'Game10', Game: 'Tennis' }
    ];
    public fields: Object = { text: 'Game', value: 'Id' };

    public myForm: FormGroup;

    public hero = { name: '', sports: '' };

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            sports: new FormControl(this.hero.sports),
            name: new FormControl(this.hero.name),
        });
    }
    submit() {

    }
}
