function assetdata() {
    // Add Parameters to Pass Here Starts

    var assetname = document.getElementById("inputAssetName").value;
    var assetdescription = document.getElementById("inputAssetDescription").value;
    var assetvalue = document.getElementById("inputAssetValue").value;
    var assetdate = document.getElementById("inputAssetDate").value

    // Add Parameters to Pass Here Ends

    //API Call Code Starts

    var xhr = new XMLHttpRequest();

    //Change URL of the API Starts

    var url = "https://digitalbolt.co/portfolio/shridhar/inventorymanagement/assets/php/assetmanager.php";

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

    var data = JSON.stringify({ "assetname": assetname, "assetdescription": assetdescription, "assetvalue": assetvalue, "assetdate": assetdate});
    xhr.send(data);

    // Send Data in JSON Ends
}