import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { DataService } from '../../services/data.service';
import { FilterByTechPipe } from '../../pipes/filter.pipe';
import { Observable } from 'rxjs';
import { Proyecto } from '../../models/proyecto.model';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    FilterByTechPipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);

  proyectos$!: Observable<Proyecto[]>;

  filtroActivo = signal<string>('ALL');

  tecnologias = ['ALL', 'Angular', 'Java', 'MySQL', 'TypeScript', 'Kotlin'];

  ngOnInit() {
    this.proyectos$ = this.dataService.getProjects();
  }

  setFiltro(tech: string) {
    this.filtroActivo.set(tech);
  }
}