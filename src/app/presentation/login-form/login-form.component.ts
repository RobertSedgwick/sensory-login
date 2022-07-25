import { Component, Input } from '@angular/core';

interface LoginFormInput {
  label: string;
  value?: string;
  placeholder: string;
  name: string;
  validation?: {
    pattern: RegExp;
    help?: string;
    error: string;
  };
};

export interface LoginFormComponentConfig {
  title?: string;
  info?: string;
  username: LoginFormInput;
  password: LoginFormInput;
  action: {
    label: string;
    submit: Function
  };
  busy?: boolean;
  done?: boolean;
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
@Input() config: LoginFormComponentConfig;
  get shouldShowForm(): boolean {
    return !this.config?.busy && !this.config?.done;
  }
  
  login(): void {
    console.log('login');
    this.config.action.submit(this.config);
  }
}
