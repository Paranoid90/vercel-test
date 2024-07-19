import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { localeInterceptor } from './locale.interceptor';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([localeInterceptor]))],
};
