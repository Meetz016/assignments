## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs")

fs.readFile("assignments/week-2/01-async-js/easy/sample.txt","utf-8",function(err,data){
    console.log(data)
})

const data="meet kotadiya"
fs.appendFile("assignments/week-2/01-async-js/easy/sample.txt",data,function(err,data){
})

const bf=new Date().getTime();
for(let i =0;i<1000000000;i++){
}
const af=new Date().getTime()
console.log("time taken in seconds is:",(af-bf)/1000,"\n\n")

fs.readFile("assignments/week-2/01-async-js/easy/sample.txt","utf-8",function(err,data){
    console.log(data)
})