import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { EditorialComponent } from '@app/presentation/editorial/editorial.component';
import { LoginFormComponent } from '@app/presentation/login-form/login-form.component';
import { LoginPageComponent } from '@app/presentation/login-page/login-page.component';
import { LoaderComponent } from '@app/presentation/loader/loader.component';

const presentationComponents = [ 
    LoginFormComponent,
    EditorialComponent,
    LoginPageComponent,
    LoaderComponent
];

@NgModule({
  declarations: [ ...presentationComponents ],
  imports: [ CommonModule, BrowserModule, FormsModule ],
  exports: [ ...presentationComponents ]
})

export class PresentationModule { }
