
var i=0; /*переменная */
        var image=document.getElementById("image");
        
        var imgs=new Array('pic1.2.jpg','pic1.3.jpg', "banner.jpg");
        function imgsrc() {
            i++;i%=imgs.length;
            image.src = imgs[i];
        } 

     
        
