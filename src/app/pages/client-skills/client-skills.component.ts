import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-client-skills',
  templateUrl: './client-skills.component.html',
  styleUrls: ['./client-skills.component.css']
})
export class ClientSkillsComponent implements OnInit {

  skillsForm!: FormGroup;

  get skills() { 
    return this.skillsForm.get('skills') as FormArray
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      Field: [''],
      techStack: this.fb.group({
        languages: [''],
        services: [''],
      }),
      skills: this.fb.array([])
    });
  }

}
