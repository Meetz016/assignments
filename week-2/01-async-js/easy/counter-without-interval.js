let counter=1

function getTime(){
    console.log(counter++)
    setTimeout(getTime,1000)
}
getTime()