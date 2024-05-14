let dady ={
    name : "Ashraf",
    education: "Graduate",
    gob : "Goverment Employee",
    experience : "ten years",
}
console.log(dady.name);
console.log(dady["experience"]);

// Type Declaration 


let employee :{
   name : string;
   age : number;
   education : string;
}={
    name : "usman",
    age : 25,
    education : "inter"
}
console.log(employee.name);
console.log(employee["age"]);