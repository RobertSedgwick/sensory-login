import { AfterViewInit, Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

import { LoginFormComponentConfig } from '../login-form/login-form.component';
import { EditorialComponentConfig } from '../editorial/editorial.component';

export interface LoginPageComponentConfig {
  background?: {
    image: string;
    video: string;
  };
  editorial: EditorialComponentConfig;
  loginForm: LoginFormComponentConfig;
};

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @Input() config: LoginPageComponentConfig;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  window = window;
  ready: boolean;

  get shouldShowEditorial(): boolean {
    return !!this.config?.editorial && !this.config?.loginForm?.done;
  }

  get shouldShowApplication(): boolean {
    return !!this.config?.loginForm?.done;
  }

  ngOnInit(): void {
    this.window.setTimeout( ()=> {
      this.ready = true;
    }, 300);
  }

  playVideo(): void {
    this.videoplayer.nativeElement.muted = true;
    this.videoplayer.nativeElement.play();
  }

  ngAfterViewInit(): void {
    this.window.setTimeout(this.playVideo.bind(this), 1000);
  }

  startOver(): void {
    this.config.loginForm.done = false;
  }
}
