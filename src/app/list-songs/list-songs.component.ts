import { Component, OnInit } from '@angular/core';
import { Songcard } from '../shared/models/songcard.model';
import { HttpnotesService } from '../shared/services/httpnotes.service';
import { MqttSongService } from '../shared/services/mqttSong.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent implements OnInit {

  songList:Songcard[];
  song:Songcard
  constructor(
    private songListSer:HttpnotesService,
    private mqttSongSer:MqttSongService
  ) { }

  ngOnInit(): void {
    this.songListSer.getHttpSongs().subscribe(
      (res)=>{
        //console.log(Object.keys(res))
        this.songListSer.setSongs(res);
        this.songListSer.updateKeys(Object.keys(res));
        this.songList = this.songListSer.getSongs();
      }
    )
    /* this.mqttSongSer.subscribeTopic(); */
  }

  sendSong(idd:number){
    console.log(idd)
    this.mqttSongSer.unsafePublish('testtopic/musicarduino',String(idd))
  }

}
