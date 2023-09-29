var inputting=document.getElementById("inputting");
var randomButton=document.getElementById("startRandomize");
var result=document.getElementById("randomResult");

inputting.addEventListener("change", inputChange);

function inputChange(e){
    var text=e.target.value;
    var text2=text.replace(/[^a-zA-Z ]/g, "").trim();
    var textArray=text2.split("");
    var textArrayLength=textArray.length;
    // console.log(text2);
    // console.log(textArray);

    randomButton.addEventListener("click",randomFunction);

    function randomFunction(){
        var textArrayDua=["a","b","c","d","e"];


        for (i=0; i<textArrayLength; i++){






            // textArrayDua[i] = textArray[Math.floor(Math.random()*textArrayLength)];

            var randomNumber = Math.floor(Math.random() * textArrayLength);
            var newLetter = textArray[randomNumber];



            textArrayDua[i]=textArray[Math.floor(Math.random()*textArrayLength)];
            console.log(textArrayDua[i]);
            console.log(textArrayDua);
            
            // textArrayDua.push(newLetter);


            // console.log(Math.floor(Math.random()*textArrayLength));
            // console.log("i is " + i);
            // console.log(textArrayDua);

    


            // var completeChar=char
            // completeChar=completeChar+char;

 





        }      
        // result.innerHTML=completeChar;  

        result.innerHTML=textArrayDua;

    }


}






