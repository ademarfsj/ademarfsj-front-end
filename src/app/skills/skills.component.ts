import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[];

  constructor() { 

    this.skills = [
      { 
        name: 'Java',
        level: 85
      },
      { 
        name: 'SQL',
        level: 70
      },
      { 
        name: 'SpringBoot',
        level: 55
      },
      { 
        name: 'JasperReports',
        level: 75
      },
      { 
        name: 'Docker',
        level: 50
      },
      { 
        name: 'Angular',
        level: 55
      },
      { 
        name: 'HTML/CSS',
        level: 50
      },
      { 
        name: 'JavaScript',
        level: 75
      }
    ];

  }

  ngOnInit(): void {
    this.skills.forEach(skill => {
      skill.levelInAsciiArt = this.getProgressInAsciiArt(skill.level);
    });
  }

  private getProgressInAsciiArt(level: number) {
    const numberOfCharacters = 20;
    var asciiArtProgress = '';

    var numberOfPaintedCharacters = level / (100 / numberOfCharacters);

    for (let index = 0; index < numberOfPaintedCharacters; index++) {
      asciiArtProgress += '▰';
    }

    for (let index = asciiArtProgress.length; index < numberOfCharacters; index++) {
      asciiArtProgress += '▱';
    }

    return asciiArtProgress;
  }

}
