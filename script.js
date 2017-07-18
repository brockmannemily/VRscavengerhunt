// function words(){
//     var text=document.createElement("a-text")
    
//     document.getElementById("scene").appendChild(text)
//     text.setAttribute("value","I can't find my lucky items for my important meeting! Can you help me find them?")
//     text.setAttribute("position","0 0 -10")
// }

function nextscene() {
    document.getElementById('scene1').setAttribute('visible', 'false')
    document.getElementById('scene2').setAttribute('visible', 'true')
}

function spoon(){
    var spoon=document.getElementById("spoon")
    spoon.setAttribute("visible","false")
    
}