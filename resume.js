
// adding scroll feature in navbar elements

var allLi = document.getElementById("body-header").getElementsByTagName('a')
var smoothScroll;
var anchorArr = [...allLi]
console.log(allLi);

anchorArr.forEach(e => {
    e.addEventListener('click', function (event) {
        event.preventDefault();
        var getTargetID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(getTargetID)
        smoothScroll = setInterval(function(){
            scroll(targetSection)
        }, 10);
    })});
    
    function scroll(targetSection) { 
        var getSectionCoordinates= targetSection.getBoundingClientRect();
        if(getSectionCoordinates.top<=0){
            clearInterval(smoothScroll)
            return;
        }  
        scrollBy(0,60);
    }



// autofilling skill percentage 

    var percentageBar= document.querySelectorAll('.box>div')
    var skillbarContainer = document.getElementById('container')
    var checkonce = false;
    function initialbarswidth() {
     for(let bars of percentageBar){
         bars.style.width = 0 + "%"
     }
 }   
 initialbarswidth()

    function autofillBar  () {
        for(let bars of percentageBar){
            let currentWidth = 0;
            let actualWidth = bars.getAttribute('data')
            let setAnimation = setInterval(function(){
                if(currentWidth>actualWidth){
                    clearInterval(setAnimation)
                }
                currentWidth++;
                bars.style.width = currentWidth + "%";
            }, 10);
        }
    }

    window.addEventListener('scroll', scrollcheck
     );
   function scrollcheck() {
    var coordinates= skillbarContainer.getBoundingClientRect()
    if( !checkonce && coordinates.top<= window.innerHeight){
        checkonce=true;
        autofillBar();
    }else if(coordinates.top> window.innerHeight){
        checkonce=false;
        initialbarswidth()

    }

   }
   