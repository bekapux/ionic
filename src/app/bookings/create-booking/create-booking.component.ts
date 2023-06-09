import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/_models/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place | undefined;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'Booking Confirmed!' }, 'confirm');
  }
  onClose() {
    this.modalCtrl.dismiss(null, 'cancel', 'booking-confirm-modal');
  }
}
