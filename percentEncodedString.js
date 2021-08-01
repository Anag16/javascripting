const urlEncode = function(text) {
    let newText = "" ;
    text = text.trim();
    for (let i = 0; i < text.length; i++) {
    if(text.charAt(i) === " "){
      newText = newText + "%20";
    }
    else{
      newText = newText + text.charAt(i);
    }
}
    return newText;
   } 
    console.log(urlEncode("Lighthouse Labs"));