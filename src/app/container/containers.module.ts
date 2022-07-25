import { NgModule } from '@angular/core';
import { PresentationModule } from '@app/presentation/presentation.module';
import { LoginContainerComponent } from '@app/container/login/login-container.component';

const containerComponents = [ 
  LoginContainerComponent
];

@NgModule({
  declarations: [ ...containerComponents ],
  imports: [ PresentationModule ],
  exports: [ ...containerComponents ]
})

export class ContainersModule { }
