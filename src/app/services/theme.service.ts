import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Creo un Signal que guarda el estado y leo de localStorage por si ya había uno.
  darkModeSignal = signal<boolean>(localStorage.getItem('theme') === 'dark');

  constructor() {
    // Un 'effect' sirve para que se ejecute automáticamente cada vez que el valor cambia
    effect(() => {
      const isDark = this.darkModeSignal();
      if (isDark) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  toggleTheme() {
    // Cambio el valor del Signal al contrario del actual
    this.darkModeSignal.update(val => !val);
  }
}