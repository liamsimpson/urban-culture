window.onload = function(){
    document.getElementById('1').onclick = function(){
        showBoard(1);
   }
    document.getElementById('2').onclick = function(){
        showBoard(2);
   }
    document.getElementById('3').onclick = function(){
        showBoard(3);
   }
    document.getElementById('4').onclick = function(){
        showBoard(4);
   }
    document.getElementById('5').onclick = function(){
        showBoard(5);
   }
    document.getElementById('6').onclick = function(){
        showBoard(6);
   }
    document.getElementById('7').onclick = function(){
        showBoard(7);
   }
    document.getElementById('8').onclick = function(){
        showBoard(8);
   }
    document.getElementById('9').onclick = function(){
        showBoard(9);
   }
    document.getElementById('10').onclick = function(){
        showBoard(10);
   }
    
    function showBoard(imageNum){
        var imgs = document.getElementById("display_boards").getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.visibility = 'hidden';        
        };
        document.getElementById("board"+imageNum).style.visibility = "visible";
}
};

function ShowDiv() {
    document.getElementById("design").style.display = "";
    document.getElementById("display_boards").style.display = "";
};


