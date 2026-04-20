import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Pipe({
  name: 'filterByTech',
  standalone: true
})
export class FilterByTechPipe implements PipeTransform {
  transform(proyectos: Proyecto[] | null, filtro: string): Proyecto[] {
    if (!proyectos) return [];
    if (!filtro || filtro === 'ALL') return proyectos;

    return proyectos.filter(p =>
      p.tech.some((t: string) => t.toLowerCase().includes(filtro.toLowerCase()))
    );
  }
}