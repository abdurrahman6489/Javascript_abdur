function myname(name){
    console.log(`${name} u are in ${this}`);
    return this;
}
const obj = myname("abdur");
console.log(obj);
const user = {
    name:"abdur"
}
const userCall = myname.call(user,user.name);
console.log(userCall);
setTimeout(myname,6000,"Abdur");

document.addEventListener("pointermove",(e)=>{
    console.log(e);
})