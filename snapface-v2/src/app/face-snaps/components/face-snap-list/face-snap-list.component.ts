import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

}

// export class FaceSnapListComponent implements OnInit, OnDestroy {
//   faceSnaps!: FaceSnap[];
//   private destroy$!: Subject<boolean>;

//   constructor(private faceSnapsService: FaceSnapsService) {}

//   ngOnInit() {
//     this.destroy$ = new Subject<boolean>();
//     this.faceSnaps = this.faceSnapsService.faceSnaps;

//     // interval(1000).pipe(tap(console.log)).subscribe();
//     // interval(1000).pipe(take(3), tap(console.log)).subscribe();
//     // interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();

//   }

//   ngOnDestroy(): void {
//     this.destroy$.next(true);
//   }
// }
