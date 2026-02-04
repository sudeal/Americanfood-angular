import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  /** Google Maps embed URL – istediğin konumu Google Maps'ten "Paylaş > Haritayı yerleştir" ile alıp buraya yapıştırabilirsin. */
  mapEmbedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894328!2d-74.11976373946229!3d40.69766374865758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2str!4v1707000000000';
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
