const prev = document.querySelector(".but .previous");
const next = document.querySelector(".but .next");
const bjImage = document.querySelector(".slid img");
let arrImage = ["./assets/images/1.jpg" ,"./assets/images/2.jpg" , "./assets/images/3.jpg"]
let current = 0 ;
prev.addEventListener("click" , function(){
    if(current == 0 ){
        current = arrImage.length-1
        bjImage.src=arrImage[current]
    }else{
        current--;
        bjImage.src=arrImage[current]
    }
})       
next.addEventListener("click" , function(){
    if(current == arrImage.length-1 ){
        current = 0
        bjImage.src=arrImage[current]
    }else{
        current++;
        bjImage.src=arrImage[current]
    }
})  

/*//////////////////slideText///////////*/
let prevButton = document.querySelector(".icons .previous");
let nextButton = document.querySelector(".icons .next");
let Image = document.querySelector(".parentText img");
let TextH2 =document.querySelector("h2")
let currentObject = 0 ;
let objectArray = [
    {
        id:0 ,
        imgSource :"./assets/images/1.jpg",
        textSource :"First Image "
    },
    {
        id:1 ,
        imgSource :"./assets/images/2.jpg",
        textSource :"Second Image"
    },
    {
        id:2 ,
        imgSource :"./assets/images/3.jpg",
        textSource :"Third Image"
    }
];
prevButton.addEventListener("click" , function(){
    if(currentObject == 0){
        currentObject = objectArray.length-1
        Image.src =objectArray[currentObject].imgSource;
        TextH2.innerHTML = objectArray[currentObject].textSource;
    }else{
        currentObject--;
        Image.src =objectArray[currentObject].imgSource;
        TextH2.innerHTML = objectArray[currentObject].textSource;
    }
});
 nextButton.addEventListener("click" , function(){
    if(currentObject == objectArray.length-1){
        currentObject = 0;
        Image.src=objectArray[currentObject].imgSource;
        TextH2.innerHTML = objectArray[currentObject].textSource;
    }else{
        currentObject++;
        Image.src=objectArray[currentObject].imgSource;
        TextH2.innerHTML=objectArray[currentObject].textSource;
    }
 })

 /*/////////////////slide Text Bolts ////////////////*/

 let prevButtonBolts = document.querySelector(".icons_bolts .previous");
 let nextButtonBolts = document.querySelector(".icons_bolts .next");
 let ImageBolts = document.querySelector(".parentText_bolts img");
 let TextH2Bolts =document.querySelector(".H2 h2");
 let bolts = document.querySelector(".bolts")
 let currentObjectBolts = 0 ;
//  let elBolt;
 let objectArrayBolts = [
     {
         id:0 ,
         imgSource :"./assets/images/1.jpg",
         textSource :"First Image "
     },
     {
         id:1 ,
         imgSource :"./assets/images/2.jpg",
         textSource :"Second Image"
     },
     {
         id:2 ,
         imgSource :"./assets/images/3.jpg",
         textSource :"Third Image"
     }
 ];
 function drownBolts(){
    for(let i =0 ; i<objectArrayBolts.length;i++){
        let boltsI = document.createElement("i");
        boltsI.className= "fas fa-circle"

        bolts.appendChild(boltsI);
    }
 }
 
drownBolts();

let elBolt = document.querySelectorAll(".fa-circle");
elBolt[currentObjectBolts].classList.add("active")
 function active(){
    let allBolt = [...elBolt];
    allBolt.map((ele) => {
        ele.classList.remove("active")
    } );
    elBolt[currentObjectBolts].classList.add("active")
 };

 prevButtonBolts.addEventListener("click" , function(){
    if(currentObjectBolts == 0){
        currentObjectBolts = objectArrayBolts.length-1
        ImageBolts.src =objectArrayBolts[currentObjectBolts].imgSource;
        TextH2Bolts.innerHTML = objectArrayBolts[currentObjectBolts].textSource;
    }else{
        currentObjectBolts--;
        ImageBolts.src =objectArrayBolts[currentObjectBolts].imgSource;
        TextH2Bolts.innerHTML = objectArrayBolts[currentObjectBolts].textSource;
    }
    active()
});


 nextButtonBolts.addEventListener("click" , function(){
    if(currentObjectBolts == objectArrayBolts.length-1){
        currentObjectBolts = 0
        ImageBolts.src =objectArrayBolts[currentObjectBolts].imgSource;
        TextH2Bolts.innerHTML = objectArrayBolts[currentObjectBolts].textSource;
    }else{
        currentObjectBolts++;
        ImageBolts.src =objectArrayBolts[currentObjectBolts].imgSource;
        TextH2Bolts.innerHTML = objectArrayBolts[currentObjectBolts].textSource;
    }
    active()
});