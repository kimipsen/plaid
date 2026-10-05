import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserPreferencesService} from './user-preferences.service';

@Injectable({ providedIn: 'root' })
export class SystemPreferencesService {
  private darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private darkModeSubject = new BehaviorSubject<boolean>(this.darkModeQuery.matches);

  constructor(private userPreferencesService: UserPreferencesService) {
    // prefers-color-scheme follows nativeTheme.themeSource, so this also fires when the theme setting changes.
    this.darkModeQuery.addEventListener('change', e => this.darkModeSubject.next(e.matches));
    userPreferencesService.getTheme$().subscribe(theme => window.plaid.setThemeSource(theme));
  }

  getDarkMode$(): Observable<boolean> {
    return this.darkModeSubject.asObservable();
  }
}
