import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {

  buttonText!: string;

  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
