import {enableProdMode, provideZoneChangeDetection} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

import {environment} from './environments/environment';
import {PlaidComponent} from './plaid/components/plaid.component';
import {AuthInterceptor} from './plaid/core/auth/auth.interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(PlaidComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
}).catch(err => console.error(err));
