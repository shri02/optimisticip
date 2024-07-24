function trademarkaffidavitdata() {
    // Add Parameters to Pass Here Starts

    var tatypeOfApplicant = document.getElementById("typeOfApplicant").value;
    var tatrademarkEntityType = document.getElementById("trademarkEntityType").value;
    var tanameOfPrivateLimited = document.getElementById("nameOfPrivateLimited").value;
    var tanameOfLLP = document.getElementById("nameOfLLP").value;
    var tanameOfPartnershipFirm = document.getElementById("nameOfPartnershipFirm").value;
    var tanameOfThePartners = document.getElementById("nameOfThePartners").value;
    var tanameOfOPC = document.getElementById("nameOfOPC").value;
    var tanameOfProprietor = document.getElementById("nameOfProprietor").value;
    var taaddressApplicant = document.getElementById("addressApplicant").value;
    var tatrademarkType = document.getElementById("trademarkType").value;
    var taauthorizationLogoDevice = document.getElementById("authorizationLogoDevice").value;
    var tatrademarkName = document.getElementById("trademarkName").value;
    var tatrademarkClass = document.getElementById("trademarkClass").value;
    var tatrademarkOffice = document.getElementById("trademarkOffice").value;
    var tatrademarkUseStatus = document.getElementById("trademarkUseStatus").value;
    var tatrademarkUseStatusDateOfUse = document.getElementById("trademarkUseStatusDateOfUse").value;
    var tapreviousRegistration = document.getElementById("previousRegistration").value;
    var tatrademarkNumber = document.getElementById("trademarkNumber").value;
    var tatrademarkStatus = document.getElementById("trademarkStatus").value;
    var tatrademarkProof = document.getElementById("trademarkProof").value;
    var taauthorizationName = document.getElementById("authorizationName").value;
    var taauthorizationSign = document.getElementById("authorizationSign").value;
    var taauthorizationPlace = document.getElementById("authorizationPlace").value;
    var taauthorizationDate = document.getElementById("authorizationDate").value;


    // Add Parameters to Pass Here Ends

    //API Call Code Starts

    var xhr = new XMLHttpRequest();

    //Change URL of the API Starts

    var url = "https://digitalbolt.co/portfolio/shridhar/optimisticip/assets/php/trademarkaffidavit.php";

    //Change URL of the API Ends

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // API Call Code Ends


    //Response Code Goes Here Starts

     xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data2 = JSON.parse(xhr.responseText);


        //Coding in Here Starts

        if (data2.status == "1") {

            //Lead Added Successfully
            console.log("success");
        }
        else {

            //Lead not added
            console.log("Some Error Occurred");
        }

        //Coding in Here Ends

      }

    };

    //Response Code Goes Here Ends



    // Send Data in JSON Starts

    var data = JSON.stringify({ "tatypeOfApplicant": tatypeOfApplicant, "tatrademarkEntityType": tatrademarkEntityType, "tanameOfPrivateLimited": tanameOfPrivateLimited, "tanameOfLLP": tanameOfLLP, "tanameOfPartnershipFirm" : tanameOfPartnershipFirm, "tanameOfThePartners" : tanameOfThePartners, "tanameOfOPC" : tanameOfOPC, "tanameOfProprietor" : tanameOfProprietor, "taaddressApplicant" : taaddressApplicant, "tatrademarkType" : tatrademarkType, "taauthorizationLogoDevice" : taauthorizationLogoDevice, "tatrademarkName" : tatrademarkName, "tatrademarkClass" : tatrademarkClass, "tatrademarkOffice" : tatrademarkOffice, "tatrademarkUseStatus" : tatrademarkUseStatus, "tatrademarkUseStatusDateOfUse" : tatrademarkUseStatusDateOfUse, "tapreviousRegistration" : tapreviousRegistration, "tatrademarkNumber" : tatrademarkNumber, "tatrademarkStatus" : tatrademarkStatus, "tatrademarkProof" : tatrademarkProof, "taauthorizationName" : taauthorizationName, "taauthorizationSign" : taauthorizationSign, "taauthorizationPlace" : taauthorizationPlace, "taauthorizationDate" : taauthorizationDate });
    xhr.send(data);

    // Send Data in JSON Ends
}