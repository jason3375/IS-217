$(document).ready(function() {
    globalVar = 1000;
     $("#screen15").click(function () {
       var content = "15 inches";
       //var price = 1000;
       var dollar = "$";
       $("#screensize").text(content);
       $("#test").text(dollar + (globalVar + 200));
    }),

  
   
   $("#screen11").click(function () {
       var content = "11 inches";
       $("#screensize").text(content);
    }),
    
    
    $("#hd256").click(function () {
       var content = "256GB";
       $("#hardsize").text(content);
       $("#price").text(globalVar + 200);
    }),
    
    
    $("#hd128").click(function () {
       var content = "128GB";
       $("#hardsize").text(content);
    });
    
    
    $("#ms16").click(function () {
       var content = "16GB";
       $("#memsize").text(content);
    });
    
    
    $("#ms8").click(function () {
       var content = "8GB";
       $("#memsize").text(content);
    });
    
     });