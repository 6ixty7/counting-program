const increase = document.getElementById(`increase`);
const decrease = document.getElementById(`decrease`);
const reset = document.getElementById(`reset`);
const myh1 = document.getElementById(`myh1`);

let count=0;

increase.onclick= function(){
    count++;
    myh1.textContent=count;
}


decrease.onclick= function(){
    count--;
    myh1.textContent=count;
}


reset.onclick= function(){
    count=0;
    myh1.textContent=count;
}