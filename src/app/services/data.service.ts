import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getSkills(): Observable<Skill[]> {
    const habilidades: Skill[] = [
      { nombre: 'Angular', nivel: 'SKILLS.LEVEL.INTERMEDIATE', icono: 'code' },
      { nombre: 'Java / Spring Boot', nivel: 'SKILLS.LEVEL.INTERMEDIATE', icono: 'terminal' },
      { nombre: 'Android / Kotlin', nivel: 'SKILLS.LEVEL.BASIC', icono: 'android' },
      { nombre: 'SKILLS.NAME.DATABASES', nivel: 'SKILLS.LEVEL.INTERMEDIATE', icono: 'storage' },
      { nombre: 'Git / GitHub', nivel: 'SKILLS.LEVEL.ADVANCED', icono: 'hub' },
      { nombre: 'UI / UX Design', nivel: 'SKILLS.LEVEL.BASIC', icono: 'palette' }
    ];
    return of(habilidades).pipe(delay(500));
  }

  getProjects(): Observable<Proyecto[]> {
    const proyectos: Proyecto[] = [
      {
        titulo: 'Gesti-DAM',
        desc: 'PROJECTS.GESTI_DAM_DESC',
        tech: ['Java', 'MySQL', 'JDBC'],
        imagen: 'assets/proyecto1.webp',
        github: 'https://github.com',
        demo: '#'
      },
      {
        titulo: 'App de Tiempo',
        desc: 'PROJECTS.WEATHER_DESC',
        tech: ['Angular', 'TypeScript', 'API Rest'],
        imagen: 'assets/proyecto2.webp',
        github: 'https://github.com',
        demo: '#'
      }
    ];
    return of(proyectos).pipe(delay(800));
  }
}