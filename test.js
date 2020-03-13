var fs = require('fs');

fs.readFile('./data.txt', 'utf8', function(err,data){
    console.log(data);
});

// console.log('hellow js');
function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}

setTimeout(myFunc,1000,'funcy');