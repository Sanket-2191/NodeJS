const start = Date.now();
setTimeout(() => {
    for (let i = 0; i < 10000000000; i++) {

    }
    console.log(`Time elapsed: ${(Date.now() - start) / 1000} s`);
}, 1000)
console.log('had to wait for: ' + (Date.now() - start) / 1000 + 'seconds')