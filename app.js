/*document.getElementById("message").innerHTML=("hello World");

document.getElementById("new_message").innerHTML=("Here comes my new message");

document.querySelector('.math').innerHTML=(4+5);*/
document.write(4+5);
document.write("lorem");
window.alert("hello SAM how u doin");

document.querySelector("#btn").addEventListener('click',function(){
  /* window.alert("you just Enterd something");*/
    document.querySelectorAll(".imgs,.imgs2,.imgs3,.imgs4").src="img_"+ random +".jpg";

    var random = Math.floor(Math.random () * 6) + 1;
    var random1 = Math.floor(Math.random () * 6) + 1;

    var seclector = document.querySelector(".imgs");
    var seclector1 = document.querySelector(".imgs2");
    var seclector2 = document.querySelector(".imgs3");
    var seclector3 = document.querySelector(".imgs4");

    seclector.src = "img_"+ random +".jpg";
    seclector1.src = "img_"+ random1 +".jpg";
    seclector2.src = "img_"+ random +".jpg";
    seclector3.src = "img_"+ random1 +".jpg";
   
});



document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById('btn1').style.backgroundColor="#28A791";
    document.getElementById('gheader').style.backgroundColor="#28A791";
    document.getElementById('click').style.backgroundColor="#8A26C1";

    document.getElementById('navi').style.backgroundColor="#1E1E1E";
    document.getElementById('navi').style.color="#fff";
    document.getElementById('navi').style.width="700px";
    document.getElementById('search').style.fontWeight="bold";
    document.getElementById('search').style.fontSize="22px";
    document.getElementById('search').style.width="300px";
    

    var random = Math.floor(Math.random () * 6) + 1;
    var random1 = Math.floor(Math.random () * 6) + 1;
 
    var seclector = document.querySelector(".imgs");
    var seclector1 = document.querySelector(".imgs2");
    var seclector2 = document.querySelector(".imgs3");
    var seclector3 = document.querySelector(".imgs4");

    seclector.src = "img_"+ random +".jpg";
    seclector1.src = "img_"+ random1 +".jpg";
    seclector2.src = "img_"+ random +".jpg";
    seclector3.src = "img_"+ random1 +".jpg";

});

var FirstName = "samuel";

var LastName = "tekeste";

var FullName = "samuel tekeste";

document.getElementById('fname').innerHTML=(FullName)

