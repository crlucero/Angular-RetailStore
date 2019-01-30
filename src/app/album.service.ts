import { Injectable } from "@angular/core";
import { Album } from "./album.model";
import { ALBUMS } from "./mock-albums";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

}
