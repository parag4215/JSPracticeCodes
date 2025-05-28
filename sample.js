let a = [2,4,6,8,10];
console.log(a);
console.log(a[3]);
console.log(a.push(12));//add element at last
console.log(a);
a.pop();//remove last element
console.log(a);
a.sort();
console.log(a);


 
let s = "Practice of String";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s);




let Student = {
    Name: "Parag",
    Age: 30,
    City: "Vadodara",
    RollNo: 12
}

console.log(Student);
console.log(Student.Name);

let A = Object.keys(Student);
console.log(A);

let B = Object.values(Student);
console.log(B); 


//IF-Else

let X = 50

if (X = 0){
    console.log("X is equal to Zero");
}else if (X>0){
    console.log("Positive");
}else{
    console.log("Negative");
}

for (let i = 0; i<5; i++){
    console.log("Hi" + i);
}

 


function add(a, b){
    return(a+b)
}
console.log(add(10,40));
 

function Name(abc){
    console.log("Name:" + " " + abc);
}

Name("parag");
Name("Megha");
 

