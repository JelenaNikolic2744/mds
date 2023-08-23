import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { MultiChoiceComponent } from './multi-choice1/multi-choice.component';
import { FormsModule } from '@angular/forms';
import { MultiChoice2Component } from './multi-choice2/multi-choice2.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MultiChoiceComponent,
    MultiChoice2Component
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
