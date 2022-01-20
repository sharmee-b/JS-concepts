/*Design a stopwatch where it has start, stop and duration property and methods.
sw.start();
sw.start(); //thorws error saying the stopwatch is started
sw.stop();
sw.stop(); //throws error saying the stopwatch is stopped
sw.duration; //gives the num of seconds counted
sw.reset(); // resetd the stopwatch to 0
*/


function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
    this.start = function () {
        if (running) {
            throw new Error("Stopwatch is already running")
        } else {
            running = true;
            startTime = new Date();
        }
    }
    this.stop = function () {
        if (!running) {
            throw new Error("Stopwatch is already stopped")
        } else {
            endTime = new Date();
            let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
            running = false;
        }
    }
    this.reset = function () {
        if (duration === 0) {
            throw new Error("Stopwatch is already reset");
        } else {
            duration = 0;
        }
    }

}

const sw = new Stopwatch();
console.log(sw);
console.log(sw.duration);
sw.start();
// sw.start();
setTimeout(function () {
    sw.stop();
    console.log(sw.duration);
}, 4000);
// sw.stop();
// sw.reset();