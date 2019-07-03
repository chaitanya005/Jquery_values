$(document).ready(function(){
        $(".button1").click(function(){
            
             alert("text is: " +$("h1").text());
    
});
});
   

$(function(){
  
            $(".button2").click(function(){
            
            alert("HTML is " + $("h1").html());
    
            });
});

$(function(){
  
            $("#btn1").click(function(){
            
            alert("value is : " + $(".form-value").val());
    
            });
});

$(function(){
    $("#btn3").click(function(){
        alert("Value is :  " + $("a").attr("href"));
    });
});
