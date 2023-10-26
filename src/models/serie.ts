// /* eslint-disable no-unused-vars */

// export class SerieStructure {
//   watched: boolean;
//   score: number;
//   constructor(
//     public id: number,
//     public name: string,
//     public creator: string,
//     public year: number,
//     public poster: string,
//     public emmies: number
//   ) {
//     this.id;
//     this.name;
//     this.creator;
//     this.year;
//     this.poster;
//     this.emmies;
//     this.watched = false;
//     this.score = 0;
//   }
// }

export class SerieStructure {
  watched: boolean = false;
  score: number = 0;

  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {}
}
