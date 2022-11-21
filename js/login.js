$("document").ready(function(){
    alert("Hello New User");
    console.log("Login page ready")
    $("#loginbtn").on('click',function(){
        var email = $("#email").val();
        var password = $("#pwd").val();

        if(email == ""|| password == "" ){
            alert("Empty Details");
        }
        else{
            $.ajax({
                url: "./php/login.php",
                method:"POST",
                data: {
                    login: 1,
                    emailphp: email,
                    pwdphp: password
                },
                success: function(response){
                    console.log(response)
                },
                datatype:"text"
            });
        }

        
    });
});