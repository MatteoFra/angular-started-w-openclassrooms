import { Input } from '@angular/core';

export class FaceSnap {
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;

  // constructor(public title: string,
  //             public description: string,
  //             public imageUrl: string,
  //             public createdDate: Date,
  //             public snaps: number) {
  // }
}

// export class FaceSnap {
//   title: string;
//   description: string;
//   createdDate: Date;
//   snaps: number;
//   imageUrl: string;

//   constructor(
//     title: string,
//     description: string,
//     imageUrl: string,
//     createdDate: Date,
//     snaps: number
//   ) {
//     this.title = title;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this.createdDate = createdDate;
//     this.snaps = snaps;
//   }
// }
