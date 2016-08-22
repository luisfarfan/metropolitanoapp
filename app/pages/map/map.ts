import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  private map: GoogleMap;
  constructor(public confData: ConferenceData, private platform: Platform) {
    this.platform.ready().then(()=> this.onPlatformReady());
  }

  private onPlatformReady(): void {

    GoogleMap.isAvailable().then(() => {

      this.map = new GoogleMap('map');

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   () => this.onMapReady(),
      //   () => alert("Error: onMapReady")
      // );

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   (data: any) => {
      //     alert("GoogleMap.onMapReady(): ");
      //   },
      //   () => alert("Error: GoogleMapsEvent.MAP_READY")
      // );

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {


        let myPosition = new GoogleMapsLatLng(-12.0140145,-77.1023301);
        console.log("My position is", myPosition);

        this.map.animateCamera({target: myPosition, zoom: 10});

        this.map.addMarker({
          'position': myPosition,
          'title': 'Mi posicion',
        }).then((marker)=>{
          marker.showInfoWindow()
        });
      })

      });





  }


}
