import { Component, OnInit } from '@angular/core';
import { Publication } from '../../models/Publication';
import { ConnectUrlService } from '../../services/connect-url.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {

  publication: Publication = {
    id_publication: 0,
    title: '',
    image: '',  
    description: '',
    date: new Date(),
    ubication: ''
  }

  edit: boolean = false;

  constructor(private connectUrlService: ConnectUrlService, private route: Router, private activatedRoute: ActivatedRoute   ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params['id'])
    if(params['id']){
      this.connectUrlService.getPublication(params['id'])
        .subscribe(
          res => { 
            console.log(res);
            this.publication = res; 
            this.edit = true;
          },
          err => console.error(err)
        )
    }

  }

  saveNewPublication(){
    delete this.publication.date;
    delete this.publication.id_publication;
    this.connectUrlService.savePublication(this.publication)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/publication']);
        },
        err => console.error(err)
      );
  }

  updatePublication(){
    delete this.publication.date;
    this.connectUrlService.updatePublication(this.publication.id_publication, this.publication)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/publication']);
        },
        err => console.error(err)
      );
  }
}
