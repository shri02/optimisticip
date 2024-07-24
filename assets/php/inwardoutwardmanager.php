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
$iochallannumber = $data->iochallannumber;
$iocategory = $data->iocategory;
$ioitem = $data->ioitem;
$ioinwardoutward = $data->ioinwardoutward;
$iodate = $data->iodate;
$iomanufacturer = $data->iomanufacturer;
$iomfg = $data->iomfg;
$ioexp = $data->ioexp;
$iobatchnumber = $data->iobatchnumber;
$iodetails = $data->iodetails;
$iopurchaseprice = $data->iopurchaseprice;
$iomrp = $data->iomrp;

//$sql1 = "SELECT count(*) AS `counting` from ordertb WHERE `status`='$stat' ";
//$res1 = mysqli_query($connection1, $sql1);
//$row1 = mysqli_fetch_assoc($res1);

//$count = $row1['counting'];

$myObj = new stdClass();


$sql = "INSERT INTO inwardoutwarddata SET `iochallannumber`='$iochallannumber', `iocategory`='$iocategory', `ioitem`='$ioitem', `ioinwardoutward`='$ioinwardoutward', `iodate`='$iodate', `iomanufacturer`='$iomanufacturer', `iomfg`='$iomfg', `ioexp`='$ioexp', `iobatchnumber`='$iobatchnumber', `iodetails`='$iodetails', `iopurchaseprice`='$iopurchaseprice',`iomrp`='$iomrp' ";

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

