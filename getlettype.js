
function getLetType(str) 
{
    let Vowels = 'aAeEiIoOuU'
    let vowelsCount = 0
    let consonantsCount = 0

    for (let i = 0; i < str.length; i++) 
    {
        if (Vowels.indexOf(str[i]) !== -1) vowelsCount ++;
        else if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && 
        str[i] !== "o" && str[i] !== "u" && str[i] !== " ") consonantsCount ++
      
    } 
    console.log("Vowels : " + vowelsCount);
    console.log("Consonant : " + consonantsCount);
}

var str = "Hello World";
getLetType(str)