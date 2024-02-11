## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter=1

function getTime(){
    console.log(counter++)
    setTimeout(getTime,1000)
}
getTime()




































































(Hint: setTimeout)