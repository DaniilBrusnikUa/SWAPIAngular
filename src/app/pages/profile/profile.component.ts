import {Component, Input, OnInit} from '@angular/core';
import {AsyncDataService} from '../../services/async-services/async-data.service';
import {ActivatedRoute, Router} from '@angular/router';

export interface CharacterI {
  name: string;
  species: string[];
  films: string[];
  starships: string[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  characterData: {
    name
  };
  species: {};
  characterFilms: any[] = [];
  characterSpaceships: any[] = [];

  constructor(private peopleData: AsyncDataService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.characterFilms = [];
    const id = this.activeRouter.snapshot.paramMap.get('id');
    this.peopleData.getCharacter(id).subscribe((res: CharacterI) => {
      this.peopleData.getSpecies(res.species[0]).subscribe((species: any) => {
        this.species = species.name;
      });
      for (const filmUrl of res.films) {
        this.peopleData.getFilm(filmUrl);
      }
      ;
      for (const spaceshipsUrl of res.starships) {
        this.peopleData.getSpaceships(spaceshipsUrl);
      }

      this.characterData = res;
    });
    this.peopleData.filmArray.subscribe((films) => {
      this.characterFilms.push(films);
    });
    this.peopleData.SpaceshipsArray.subscribe((films) => {
      if (films) {
        this.characterSpaceships.push(films);

      }
    });
  }

}

