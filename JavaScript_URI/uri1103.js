var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++) {

    var [H1, M1, H2, M2] = lines[i].split(" ").map(item => parseInt(item));
    if(H1===0 && M1===0 && H2===0 && M2===0) {
        break;
    }
    else {
        var horaTotal = (H2 - H1);
        var minTotal = (M2 - M1);

        if(horaTotal < 0) {
            horaTotal += 24;
        }

        if(minTotal < 0) {
            minTotal += 60;
            horaTotal -= 1;
            if(horaTotal < 0) {
                horaTotal += 24;
            }
        }

        if(minTotal === 0 && horaTotal === 0) {
            horaTotal = 24;
            minTotal = 0;
            var horasEmMin = (horaTotal*60);
            var totalMinDormidos = (horasEmMin + minTotal);
            console.log(totalMinDormidos);
        }
        else {
            var horasEmMin = (horaTotal*60);
            var totalMinDormidos = (horasEmMin + minTotal);
            console.log(totalMinDormidos);
        }
    }
}