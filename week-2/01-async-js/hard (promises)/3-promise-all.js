/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(t)
        },t)
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(t)
        }, t);
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(t)
        },t)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime=Date.now()
    t1 = t1*1000;
    t2 = t2*1000;
    t3 = t3*1000;
    const T1=wait1(t1)
    const T2=wait2(t2)
    const T3=wait3(t3)
    const promises = [T1,T2,T3]

    return Promise.all(promises)
    .then(() => {
    const endTime = Date.now();
    return endTime - startTime;
    });
}


module.exports = calculateTime;
