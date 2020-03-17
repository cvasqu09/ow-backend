import { Component } from '@angular/core';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private teams$ = this.teamService.getTeams();

  constructor(private teamService: TeamService) {}
}
