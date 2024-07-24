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

//$sql1 = "SELECT count(*) AS `counting` from ordertb WHERE `status`='$stat' ";
//$res1 = mysqli_query($connection1, $sql1);
//$row1 = mysqli_fetch_assoc($res1);

//$count = $row1['counting'];

$myObj = new stdClass();

	$sql1 = "SELECT count(*) AS `counting` from inwardoutwardtable ";
	$res1 = mysqli_query($connection1, $sql1);
	$row1 = mysqli_fetch_assoc($res1);

	$count = $row1['counting'];


	$sql = "SELECT * from inwardoutwardtable ";
	$res = mysqli_query($connection1, $sql);

	while($row = mysqli_fetch_assoc($res))
	{
		$records[] = array(
		'iochallannumber' => $row['iochallannumber'],
		'iotitem' => $row['iotitem'],
		'iotdate' => $row['iotdate'],
		'iotinwardoutward' => $row['iotinwardoutward'],
		'iotuser' => $row['iotuser'],
		'iottotal' => $row['iottotal'],
		);
	}

		$myObj->status = "1";
		$myObj->count = $count;
		for($i=0; $i<$count; $i++)
		{
			$myObj->data[] = $records[$i];
		}
		
		$myJSON = json_encode($myObj);
		echo $myJSON;
	


?>

