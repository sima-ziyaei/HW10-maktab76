// - Are these code fragments equal? In other words, do they behave the same way in
// any circumstances, for any handler functions?


promise.then(f1).catch(f2);
Versus:
promise.then(f1, f2);

//مساوی نیستن
//چون که توی اولی اگه یه اروری رخ بده توی then  میره توی catch گرفته میشه
//اما توی دومی دیگه catch وجود نداره که بخواد ارور مارو بگیره