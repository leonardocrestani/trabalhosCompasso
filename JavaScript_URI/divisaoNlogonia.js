var input = require('fs').readFileSync('stdin', 'UTF8');

var values = input.split('\n');

var k = parseInt(values.shift());

while(k!==0) {

        var [n, m] = values.shift().split(" ").map(Number);

        for(var i = 0; i < k; i++)  {

            var [x, y] = values.shift().split(" ").map(Number);

                if(x===n || y===m){
                    console.log("divisa");
                }
                else if(x>n && y >m){
                    console.log("NE");
                }
                else if(x<n && y>m){
                    console.log("NO");
                }
                else if(x<n && y<m){
                    console.log("SO");
                }
                else if(x>n && y<m){
                    console.log("SE");
                }
        }

        k = parseInt(values.shift());
}