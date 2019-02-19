
<?php

header('Content-Type:application/json; charset=utf-8');


$username = $_GET['username'];
$password = $_GET['password'];

$data = array ('code'=> 200,'data' => "成功")
if($username == 'haobo' && $password == 123){
    exit(json_encode($data));
}



?>























