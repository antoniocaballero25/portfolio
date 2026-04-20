import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, HeroComponent,AboutComponent,SkillsComponent, ContactComponent,ProjectsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.addLangs(['es', 'en', 'de']);

    const savedLang = localStorage.getItem('lang');
    
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      this.translate.use('es');
    }
  }
}