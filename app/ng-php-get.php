<?php 
//SHOULD BE IN HTDOCS 
//on XAMPP
//htdocs/cs4640/ng-php/ng-php-get.php

// header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
//credentials and such go above

//retrieve data from a get request
$getdata = $_GET['str']; //string
//must convert from json so we know how to extract it

//json
// { "name": "someone", "email": "s@s.s", ...}
// %22
// change it back, urldecode(string) -- urlencode(string)

$request = json_decode(urldecode($getdata));

//do processing (nothing special just adding a timestamp)
$data = []; //used to return to Angular

$current_date = date("Y-m-d");
foreach ($request as $key =? $value) {
    $data[$key] = $value;
}
$data['order_date'] = $current_date

//send it back, make the response display
echo json_encode([$data]);

?>