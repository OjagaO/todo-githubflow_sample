$("#btn").click(function () { 
    console.log("----------------");
    let val = $("#input").val();
    // let li = document.createElement("li");
    // let todo = .text(val);
    $("#todos").append("<li><input type = 'checkbox'>"+ val + "</li>");
    $("#input").val("");
});