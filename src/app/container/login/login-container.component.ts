import { Component, OnInit } from '@angular/core';
import { LoginFormComponentConfig} from '@app/presentation/login-form/login-form.component';
import { LoginPageComponentConfig} from '@app/presentation/login-page/login-page.component';
import { EditorialComponentConfig } from '@app/presentation/editorial/editorial.component';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  window = window;
  loginFormComponentConfig: LoginFormComponentConfig
  editorialComponentConfig: EditorialComponentConfig;
  loginPageComponentConfig: LoginPageComponentConfig;

  constructor() { }

  ngOnInit(): void {
    this.loginForm();
    this.loginContent();
    this.loginPage();
  }

  loginForm(): void {
    this.loginFormComponentConfig = {
      title: 'Sign In',
      info: `Welcome back, enter your username and 5 digit passcode to enter your control panel.`,
      username: {
        label: 'Username',
        placeholder: 'username or email',
        name: 'username',
        validation: {
          pattern: new RegExp(`^\w+$`),
          help: 'Must contain only letters and numbers',
          error: 'Invalid username format'
        }
      },
      password: {
        label: 'Passcode',
        placeholder: '5 digit passcode',
        name: 'password',
        validation: {
          pattern: new RegExp(`^\d{5}$`),
          help: 'Must contain the 5 digt passcode',
          error: 'Invalid passcode'
        }
      },
      action: {
        label: 'Go',
        submit: this.login.bind(this)
      }
      
    }
  }

  loginContent(): void {
    this.editorialComponentConfig = {
      heading: 'Sense of Security',
      text: `<strong>Sensory Secure</strong><span>&#174;</span> protects your private world at home, 
        on-board your luxury yacht or at the thriving hub of your business.`
    }
  }

  loginPage(): void {
    const videos: string[] = [
      'walking-calm.mp4',
      'sea-look.mp4',
      'boats-loop.mp4',
      'wheat-slow.mp4'
    ];

    const selection = Math.floor(Math.random()*videos.length+1)-1;

    this.loginPageComponentConfig = {
      background: {
        image: 'https://www.sensorysecure.com/assets/SS0004RM_MAR_TESTMONIAL_1.jpg',
        video: `assets/${videos[selection]}`
      },
      editorial: this.editorialComponentConfig,
      loginForm: this.loginFormComponentConfig
    }
  }

  login(loginForm: LoginFormComponentConfig): void {
    loginForm.busy = true;
    this.loginDone(loginForm);
  }

  loginDone(loginForm: LoginFormComponentConfig): void {
    this.window.setTimeout( ()=> {
      loginForm.busy = false;
      loginForm.done = true;
    }, 3000);
  }

}
