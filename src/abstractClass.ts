// * Blueprint that cannot create object, only responsible for extending from other class
abstract class TakePhoto1 {
  constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
  abstract getSepia(): void;
  getReelTime():number{
    // Calculation
    return 8
  }
}

class Instagram1 extends TakePhoto1 {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode,filter)
  }
  getSepia(): void {
      console.log("Sepia");
  }
}

const jhn = new Instagram1("test", "Test",3);
jhn.getReelTime()