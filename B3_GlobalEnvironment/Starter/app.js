

function a() {
    var hello = 'hello';
    console.log('a called');
    function b() {
        console.log('b called');
        console.log(hello);
    }
    b();
}
a();