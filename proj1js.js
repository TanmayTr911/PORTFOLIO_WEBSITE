let arr=[1,2,3,4];

function func(arr){
   let sum=0;
   
   for(var i=0;i<3;i++){
       sum+=arr[i];
   }
   return sum;
}

console.log(func(arr));

document.getElementById("cv").innerHTML="hello";
