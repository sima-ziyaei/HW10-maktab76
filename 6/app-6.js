new Promise(function(resolve, reject) {
    setTimeout(() => {
    throw new Error("Whoops!");
    }, 1000);
}).catch(
    // console.log("oh no"));
    alert);

    //کار نمیکنه چون alert کار نمیکنه
