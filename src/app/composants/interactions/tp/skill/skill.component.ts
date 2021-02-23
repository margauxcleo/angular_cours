import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/classes/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill!: Skill;
  
  // @Input() name!: string;
  // @Input() logo!: string;
  // @Input() site!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
