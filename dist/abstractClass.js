"use strict";
// * Blueprint that cannot create object, only responsible for extending from other class
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // Calculation
        return 8;
    }
}
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const jhn = new Instagram1("test", "Test", 3);
jhn.getReelTime();
