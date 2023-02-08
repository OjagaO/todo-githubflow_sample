$("#btn").click(function () { 
    let val = $("#input").val();
    if(val.length > 0){
        $("#todos").append("<li><input type = 'checkbox'>"+ val + "</li>");
        $("#input").val("");
    }
});

$(document).on("change","input[type = checkbox]",function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through")
        $(this).parent().css("color","#ccc")
    } else if(!$(this).is("checked")){
        $(this).parent().css("text-decoration","none")
        $(this).parent().css("color","#000")
    }
})