var  date = new Date();
console.log(date);

var dObj = new Date();
var dstr =dObj .toString();
console.log(dstr);

var d =new Date();
var day =d.getDay();

var d= new Date();
var dayName =['Monday','Tuesday','Wednesday','Thursday','Friday','Saterday','Sunday'];
console.log(dayName[date.getDay()]);

var currentDate = new Date();
var year =currentDate .getFullYear();
var month =currentDate .getMonth();
var day =currentDate .getDay();
var hours = currentDate .getHours();
var minute =currentDate .getMinutes();
var second =currentDate .getSeconds();

var later =new Date(2020,11,31);
console.log(later);

var specificDate = new Date(1992,1,2);
console.log(specificDate);

var preDate = new Date(1980,0,1);
var currentDate = new Date();
var elapseMillisecond = currentDate - preDate;
alert(elapseMillisecond);


var d = new Date();
   d .setFullYear(2025);
   alert(d);

   /////CH.....35--37 ///////



   function display(){
      alert();
   }

   function askName (){
      var userName=prmpt('Enter name');
   }

   function callfunction(){
      functionOne ();
      functionTwo ();

   }

   function enterName (){
      var name = prompt('Enter name');
         alert(name);
   }

   function concate (para1 ,para2){
      var result = 'para1' + 'para2';
      console.log(result);
   }
   
   function multiply (){
      var result= a* b* c ;
   }

   function avarage (arr){
      arr.reduce((total,num)=> total+ num,0);
      return sum/arr.length ;
   }



   function sum(math,eng,sci){
      var g= math + eng +sci;
      return g;
      
   }
   function percentage(tt){
      var per=tt/300*100;
      console.log(per)
   }

   var total=sum(55,65 ,75);
   percentage(total)



function arrayAve(arr){
  var sum=arr.reduce((total,num)=>total+num,0);
  return sum /arr.length;
}

function getValue(){
   return 42;
   var storeValue = getValue();
}


function countLatter (word){
  return word.length;
}
 

function setYear(date,year){
    date .setFullYear(year);
}


   
function age (birthday){
   var today=new Date();
   today .getFullYear();
   var monthDiffre =today .getMonth();
     if(monthDiffre <0 ||(monthDiffre ===0 && today .getDate()
   >= birthday .getDate())){
          age--;
}
  return age;
}




function containWords (arr,word){
   return  arr.includes(word);
}
var array =['haris','sana','any','afshan','hadi','nimra'];
console.log(containWords(array,'zaid'));


function repeatLetter (letter){
   var a = afshan;
  return letter .repeat(10);
}
 console.log(repeatLetter);



 function reverseArr(arr){
   return arr.reverse();
 }
 var arr= ['a','b','c','d','e'];
 console.log(reverseArr(arr));


///////CH.....38///////


function localVariable(){
   var localvar= 'i am a local variable';
   console.log(localvar);
}
  localVariable();


  ////custom function /////
     

  function power (a,b){
   return Math.pow(a,b);

  }
   console.log(power(2,3));




   function leapyear (year){
      return (year% 4===0 && year % 100 !== 0) ||(year % 400===0);

   }
   console.log(leapyear(2024));