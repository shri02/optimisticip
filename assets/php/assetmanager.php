<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//header('Content-type: text/xml');
include 'database.php';

//$xml = new SimpleXMLElement('<xml/>');


$data = json_decode(file_get_contents("php://input"));
// $variablename = $data(defined in last line)->parametername from js
$assetname = $data->assetname;
$assetdescription = $data->assetdescription;
$assetvalue = $data->assetvalue;
$assetdate = $data->assetdate;

//$sql1 = "SELECT count(*) AS `counting` from ordertb WHERE `status`='$stat' ";
//$res1 = mysqli_query($connection1, $sql1);
//$row1 = mysqli_fetch_assoc($res1);

//$count = $row1['counting'];

$myObj = new stdClass();


$sql = "INSERT INTO assetdata SET `assetname`='$assetname', `assetdescription`='$assetdescription', `assetvalue`='$assetvalue', `assetdate`='$assetdate' ";

	if (mysqli_query($connection1, $sql)) {
		$myObj->status = "1";
		$myJSON = json_encode($myObj);
		echo $myJSON;
	} 
	else 
	{
		$myObj->status = "0";
		$myJSON = json_encode($myObj);
		echo $myJSON;
	}

?>

