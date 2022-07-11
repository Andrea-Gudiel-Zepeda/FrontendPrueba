import { Component, HostBinding, OnInit } from '@angular/core';
import { ConnectUrlService } from '../../services/connect-url.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  publications: any = [];

  constructor(private connectUrlService: ConnectUrlService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(){
    this.connectUrlService.getPublications().subscribe(
      res => {
        this.publications = res;
      },
      err => console.log(err)
    );
  }

  deletePublication(id: string){
    this.connectUrlService.deletePublication(id).subscribe(
      res => {
        console.log(res)
        this.getPublications();
      }, 
      err => console.log(err)
    )
  }

  /*
  deleteGame(id: string){
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res)
        this.getGames();
      }, 
      err => console.log(err)
    )
  }
*/
}
