<?php
if(isset($_POST["register"])){
    $connection = new mysqli("localhost" ,'root' , '' ,'mytaskdb');
    if($connection){
        echo"success"
    }
    else{
        die("error".mysqli_error());
    }


$showAlert = false;
$showError = false;
$exists = false;

$name = $_POST["namephp"];
$email = $_POST["emailphp"];
$password = $_POST["pwdphp"];
$age = $_POST["agephp"];
$dob = $_POST["dobphp"];
$adr1 = $_POST["adr1php"];
$adr2 = $_POST["adr2php"];
$phn = $_POST["phnphp"];

$sql = "Select * from users where Email = '$email'";
$result= mysqli_query($connection,$sql);
$num = mysqli_num_rows($result);

if($num==0){
    $hash = password_hash($password,PASSWORD_DEFAULT);

    $sql = "INSERT INT0 'user login' ('Name','Email','Password','Age','DOB','Address1','Address2','Phone') 
    VALUES ('$name','$email','$password','$age','$dob','$adr1','$phn') ";

    $result = mysqli_query($connection,$sql);

    if($result){
        $showAlert = true;
    }
}
}
?>