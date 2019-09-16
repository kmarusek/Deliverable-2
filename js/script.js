var eventType = prompt("Enter Event Type Here");
var tempFahr = prompt("Enter Temperature In Degrees Fahrenheit");
var result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear";// the suit and coat needs to change based on the data input

if( tempFahr <= 54 && eventType == "Formal")
{
    console.log(result.concat(" a suit and a coat."));
}else if(tempFahr <= 70 && eventType =="Formal"){
    console.log(result .concat(" a suit and a jacket."));
}else if(tempFahr > 70 && eventType =="Formal"){
    console.log(result .concat(" a suit and no jacket."));
};
if( tempFahr <= 54 && eventType == "Casual")
{
    console.log(result .concat(" something comfy and a coat."));
}else if(tempFahr <= 70 && eventType == "Casual"){
    console.log(result .concat(" something comfy and a jacket."));
}else if(tempFahr > 70 && eventType == "Casual"){
    console.log(result .concat(" something comfy and no jacket."));
};
if (tempFahr <= 54 && eventType == "Semi-formal")
{
    console.log(result .concat(" a polo and a coat."));
}else if(tempFahr <= 70 && eventType =="Semi-formal"){
    console.log(result .concat(" a polo and a jacket."));
}else if(tempFahr > 70 && eventType =="Semi-formal"){
    console.log(result .concat(" a polo and no jacket."));
};