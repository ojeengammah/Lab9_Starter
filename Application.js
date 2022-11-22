
window.onload = function() 
{
window.addEventListener("error", (problem) =>{
console.log("oops there is an error");
console.error(problem);

});
    let log = document.getElementById("log");
    log.addEventListener('click', () =>{
        console.log("this is a log");
    });
    let error = document.getElementById("error");
    error.addEventListener('click', () =>{
        console.error("this is an error");
    });
    let count = document.getElementById("count");
    count.addEventListener('click', () =>{
        console.count('Count Button');
    });
    let warn = document.getElementById("warn");
    warn.addEventListener('click', () =>{
    console.warn('Console Warn Button');
    });
    let assert = document.getElementById("assert");
    assert.addEventListener('click', () =>{
    const number = 2;
    const errorMsg = 'number 3 is expected';
    console.assert(number == 3, {number, errorMsg});
    });
    let clear = document.getElementById("clear");
     clear.addEventListener('click', () =>{
        console.clear("Console was Cleared");
    });
    let dir = document.getElementById("dir");
    dir.addEventListener('click', () =>{
        console.dir(dir);
    });
    // check this
    let dirxml = document.getElementById("dirxml");
    dirxml.addEventListener('click', () =>{
        console.dirxml(dirxml);
    });
    let start = document.getElementById("start");
    start.addEventListener('click', () =>{
        console.group();
    });
    let end = document.getElementById("end");
    end.addEventListener('click', () =>{
        console.groupEnd();
    });
    let table = document.getElementById("table");
    table.addEventListener('click', () =>{
        let people = [
            {
              first: 'Ojeen',
              last: 'Gammah',
              class: 'CSE 110',
            },
            {
              first: 'Jack',
              last: 'William',
              class: 'CSE 110',
            },
            {
              first: 'Henri',
              last: 'Matisse',
              class: 'CSE 110',
            }
          ];
        console.table(people);
    });
    let stimer = document.getElementById("stimer");
    stimer.addEventListener('click', () =>{
        console.time("timer button");
    });
    let etimer = document.getElementById("etimer");
    etimer.addEventListener('click', () =>{
        console.timeEnd("timer button");
    });
    let trace = document.getElementById("trace");
    trace.addEventListener('click', () =>{
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
    });
    let TGE = document.getElementById("TGE");
    TGE.addEventListener("click",  
    HandleBtnClick
    );
};
function HandleBtnClick(){
    let x = oops;
}


