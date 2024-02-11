## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

## Code
const fs=require("fs")

fs.readFile("assignments/week-2/01-async-js/easy/sample.txt","utf-8",function(err,data){
    console.log(data)
})
const bf=new Date().getTime();
for(let i =0;i<10000000000;i++){
}
const af=new Date().getTime()
console.log("time taken in seconds is:",(af-bf)/1000)
console.log("Read operation ke baad par print pehle hona chaiye")