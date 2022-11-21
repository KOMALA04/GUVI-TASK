$("document").ready(function(){
    //alert("Hello new User");
    console.log("Register page ready")
    $("#registerbtn").on('click',function(){
        var email = $("#email").val();
        var name = $("#name").val();
        var password = $("#pwd").val();
        var age = $("#age").val();
        var dob = $("#dob").val();
        var adr1 = $("#adr1").val();
        var adr2 = $("#adr2").val();
        var phn = $("#phn").val();
 
 
        if(email == ""|| password == ""|| name =="" || age==""|| dob=="" || adr1=="" || adr2==""|| phn==""){
            alert("Empty Details");
        }
        else{
            $.ajax({
                url: "./php/register.php",
                method:"GET",
                data: {
                    login: 1,
                    emailphp: email,
                    pwdphp: password,
                    namephp: name,
                    agephp: age,
                    dobphp: dob,
                    adr1php: adr1,
                    adr2php: adr2,
                    phnphp: phn
                },
                success: function(response){
                    console.log(response)
                },
                datatype:"text"
            });
        }
 
        
    });
 });