var arr = prompt("Enter your array(with ','):").split(",")
let item=prompt("Enter which number you want to find?");
if(arr.indexOf(item)!=-1){
    console.log("Element exist in array");
} else{
    console.log("Element does not exist in array");
}
console.log("& index of array is", arr.indexOf(item)+1);
