// - what is the Output of the code below and why ?


let promise = new Promise(function(resolve, reject) {
resolve(1);
setTimeout(() => resolve(2), 1000);
});
promise.then(alert);


//1
//چون توی promis فقط یدونه resolve باید داشته باشیم
/// برای همین فقط اولی رو نشون میده و دومی رو ایگنور میکنه 