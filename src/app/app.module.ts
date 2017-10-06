import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-ng-dropdowns';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DropDownListAllModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }