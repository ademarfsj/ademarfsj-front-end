import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SkillsComponent } from './skills/skills.component';
import { PresentationComponent } from './presentation/presentation.component';
import { OpenTagComponent } from './open-tag/open-tag.component';
import { CloseTagComponent } from './close-tag/close-tag.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ClusterComponent } from './cluster/cluster.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    PresentationComponent,
    OpenTagComponent,
    CloseTagComponent,
    ExplorerComponent,
    AboutComponent,
    SocialComponent,
    EducationalBackgroundComponent,
    HobbiesComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
