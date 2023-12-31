<?php 
$username = $_POST['username'];
$name = $_POST['name'];
$email = $_POST['email'];
$phnum = $_POST['phnum'];
$password = $_POST['password'];
$gender = $_POST['gender'];

//database connection
$conn = new mysql('localhost','root', ' ', 'test');
if($conn->connection_error){
    die('Connection Failed : '.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into registration(username, name, email, phnum, password, gender) 
        value(?, ?, ?, ?, ?, ?)")
    $stmt->bind_param("sssiss",$username, $name, $email, $phnum, $password, $gender);
    $stmt->execute();
    echo "registration Successfully....";
    $stmt->close();
    $conn->close();    

}
?>