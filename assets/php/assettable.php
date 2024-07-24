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

	$sql1 = "SELECT count(*) AS `counting` from assetdata ";
	$res1 = mysqli_query($connection1, $sql1);
	$row1 = mysqli_fetch_assoc($res1);

	$count = $row1['counting'];


	$sql = "SELECT * from assetdata ";
	$res = mysqli_query($connection1, $sql);

	while($row = mysqli_fetch_assoc($res))
	{
		$records[] = array(
		'assetname' => $row['assetname'],
		'assetdescription' => $row['assetdescription'],
		'assetvalue' => $row['assetvalue'],
		'assetdate' => $row['assetdate'],
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

