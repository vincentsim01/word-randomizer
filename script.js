var inputting=document.getElementById("inputting");
var randomButton=document.getElementById("startRandomize");
var result=document.getElementById("randomResult");



inputting.addEventListener("change", inputChange);

function inputChange(e){
    var k=0;
    var text=e.target.value;
    var text2=text.replace(/[^a-zA-Z ]/g, "").trim();
    var textArray=text2.split("");
    var textArrayLength=textArray.length;
    // console.log(text2);
    // console.log(textArray);

    randomButton.addEventListener("click",randomFunction);

    function randomFunction(){

        var textArrayDua=[];

        // for(j=0;j<textArrayLength;j++){
        //     textArrayDua.push(j);
        //     // console.log(textArrayDua[j]);
        //     // console.log(textArrayDua);
        // }

        // for(j=textArrayLength-1;j>=0;j--){
        //     var randomNumber = Math.floor(Math.random() *j);
        //     var newLetter = textArray[randomNumber];

        //     textArrayDua[k]=newLetter;

        //     console.log(randomNumber);
        //     console.log(newLetter);
        //     k=k+1;

        //     console.log(k);


            

        // }


            for (let i = textArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = textArray[i];
              textArray[i] = textArray[j];
              textArray[j] = temp;
            }
          

        // for (i=0; i<textArrayLength; i++){

            
        //     var randomNumber = Math.floor(Math.random() * textArrayLength);
        //     var newLetter = textArray[randomNumber];



        //     textArrayDua[i]=textArray[Math.floor(Math.random()*textArrayLength)];
        //     console.log(textArrayDua[i]);
        //     console.log(textArrayDua);
            



        // }



        // for (i=0; i<textArrayLength; i++){






        //     // textArrayDua[i] = textArray[Math.floor(Math.random()*textArrayLength)];

        //     var randomNumber = Math.floor(Math.random() * textArrayLength);
        //     var newLetter = textArray[randomNumber];



        //     textArrayDua[i]=textArray[Math.floor(Math.random()*textArrayLength)];
        //     console.log(textArrayDua[i]);
        //     console.log(textArrayDua);
            
        //     // textArrayDua.push(newLetter);


        //     // console.log(Math.floor(Math.random()*textArrayLength));
        //     // console.log("i is " + i);
        //     // console.log(textArrayDua);

    


        //     // var completeChar=char
        //     // completeChar=completeChar+char;

 





        // }      
        // result.innerHTML=completeChar;  

        result.innerHTML=textArray;

    }


}






