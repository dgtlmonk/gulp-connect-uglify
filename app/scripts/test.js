var a = 'this is a test script';


(function (m){
    console.log(m);
    console.log('this is another string');
    console.log('this is another string');
    for (var i=0; i<=10;i++) {
        console.log('Iteration ' + i + ':' +  (i+1));
    }
    console.log('some test');

})('hello');
