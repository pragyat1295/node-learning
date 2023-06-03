// We will talk about global objects available inside node.js

// console.log(global);

// ================================================================================

// setTimeout -> it will run only once within a specific time.


// setTimeout(()=> {
//     console.log("From Timeout")
//     clearInterval(init);
// }, 3000);

// ===================================================================================

// setInterval will run after every specific interval.

// const init = setInterval(()=> {
//     console.log("from interval")
// }, 1000);

// ===================================================================================

// get absolute path & absolute path and file name of a particular file

console.log(__dirname);
console.log(__filename);

// ====================================================================================

// Node dosen't have the access to the document objects from browser.