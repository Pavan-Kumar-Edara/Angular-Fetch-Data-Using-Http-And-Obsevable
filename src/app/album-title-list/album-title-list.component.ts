import { Component,OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-album-title-list',
  templateUrl: './album-title-list.component.html',
  styleUrls: ['./album-title-list.component.css']
})
export class AlbumTitleListComponent implements OnInit{
  
  public titles:any
  constructor(private serve:FetchDataService){}

  ngOnInit(): void {
    this.serve.getTitles().subscribe(value=>{
      this.titles=value;
    })
  }

}
