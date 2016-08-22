import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'build/pages/page1/page1.html',
  styles: [`
    .map-page ion-content {
  background: rgb(229, 227, 223);
}

.map-page #map {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 150ms ease-in
}

.map-page #map.show-map {
  opacity: 1;
}
`]
})
export class Page1 {
  private map: GoogleMap;

  constructor(public navCtrl: NavController, private platform: Platform) {
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
        alert("GoogleMap.onMapReady(): " + JSON.stringify(data));

        let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
        console.log("My position is", myPosition);

        this.map.animateCamera({target: myPosition, zoom: 10});
      });
    });


  }

  private onMapReady(): void {
    alert('Map ready');
    //this.map.setOptions(mapConfig);
  }


}
