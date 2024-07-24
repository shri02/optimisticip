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
$tatypeOfApplicant = $data->tatypeOfApplicant;
$tatrademarkEntityType = $data->tatrademarkEntityType;
$tanameOfPrivateLimited = $data->tanameOfPrivateLimited;
$tanameOfLLP = $data->tanameOfLLP;
$tanameOfPartnershipFirm = $data->tanameOfPartnershipFirm;
$tanameOfThePartners = $data->tanameOfThePartners;
$tanameOfOPC = $data->tanameOfOPC;
$tanameOfProprietor = $data->tanameOfProprietor;
$taaddressApplicant = $data->taaddressApplicant;
$tatrademarkType = $data->tatrademarkType;
$taauthorizationLogoDevice = $data->taauthorizationLogoDevice;
$tatrademarkName = $data->tatrademarkName;
$tatrademarkClass = $data->tatrademarkClass;
$tatrademarkOffice = $data->tatrademarkOffice;
$tatrademarkUseStatus = $data->tatrademarkUseStatus;
$tatrademarkUseStatusDateOfUse = $data->tatrademarkUseStatusDateOfUse;
$tapreviousRegistration = $data->tapreviousRegistration;
$tatrademarkNumber = $data->tatrademarkNumber;
$tatrademarkStatus = $data->tatrademarkStatus;
$tatrademarkProof = $data->tatrademarkProof;
$taauthorizationName = $data->taauthorizationName;
$taauthorizationSign = $data->taauthorizationSign;
$taauthorizationPlace = $data->taauthorizationPlace;
$taauthorizationDate = $data->taauthorizationDate;

//$sql1 = "SELECT count(*) AS `counting` from ordertb WHERE `status`='$stat' ";
//$res1 = mysqli_query($connection1, $sql1);
//$row1 = mysqli_fetch_assoc($res1);

//$count = $row1['counting'];

$myObj = new stdClass();


$sql = "INSERT INTO trademarkaffidavitdata SET `tatypeOfApplicant`='$tatypeOfApplicant', `tatrademarkEntityType`='$tatrademarkEntityType', `tanameOfPrivateLimited`='$tanameOfPrivateLimited', `tanameOfLLP`='$tanameOfLLP', `tanameOfPartnershipFirm`='$tanameOfPartnershipFirm', `tanameOfThePartners`='$tanameOfThePartners', `tanameOfOPC`='$tanameOfOPC', `tanameOfProprietor`='$tanameOfProprietor', `taaddressApplicant`='$taaddressApplicant', `tatrademarkType`='$tatrademarkType', `taauthorizationLogoDevice`='$taauthorizationLogoDevice', `tatrademarkName`='$tatrademarkName', `tatrademarkClass`='$tatrademarkClass', `tatrademarkOffice`='$tatrademarkOffice', `tatrademarkUseStatus`='$tatrademarkUseStatus', `tatrademarkUseStatusDateOfUse`='$tatrademarkUseStatusDateOfUse', `tapreviousRegistration`='$tapreviousRegistration', `tatrademarkNumber`='$tatrademarkNumber', `tatrademarkStatus`='$tatrademarkStatus', `tatrademarkProof`='$tatrademarkProof', `taauthorizationName`='$taauthorizationName', `taauthorizationSign`='$taauthorizationSign', `taauthorizationPlace`='$taauthorizationPlace', `taauthorizationDate`='$taauthorizationDate' ";

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

