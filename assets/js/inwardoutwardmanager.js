function iodata() {
    // Add Parameters to Pass Here Starts

    var iochallannumber = document.getElementById("inputInwardOutwardChallanNo").value;
    var iocategory = document.getElementById("inputInwardOutwardCategory").value;
    var ioitem = document.getElementById("inputInwardOutwardItem").value;
    var ioinwardoutward = document.getElementById("inputInwardOutward").value;
    var iodate = document.getElementById("inputInwardOutwardDate").value;
    var iomanufacturer = document.getElementById("inputInwardOutwardManufacturer").value;
    var iomfg = document.getElementById("inputInwardOutwardMfgDate").value;
    var ioexp = document.getElementById("inputInwardOutwardExpDate").value;
    var iobatchnumber = document.getElementById("inputInwardOutwardBatchNumber").value;
    var iodetails = document.getElementById("inputInwardOutwardDetails").value;
    var iopurchaseprice = document.getElementById("inputInwardOutwardPurchasePrice").value;
    var iomrp = document.getElementById("inputInwardOutwardMRP").value;

    // Add Parameters to Pass Here Ends

    //API Call Code Starts

    var xhr = new XMLHttpRequest();

    //Change URL of the API Starts

    var url = "https://digitalbolt.co/portfolio/shridhar/inventorymanagement/assets/php/inwardoutwardmanager.php";

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

    var data = JSON.stringify({ "iochallannumber": iochallannumber, "iocategory": iocategory, "ioitem": ioitem, "ioinwardoutward": ioinwardoutward, "iodate": iodate, "iomanufacturer": iomanufacturer, "iomfg": iomfg, "ioexp": ioexp, "iobatchnumber": iobatchnumber, "iodetails": iodetails, "iopurchaseprice": iopurchaseprice, "iomrp": iomrp});
    xhr.send(data);

    // Send Data in JSON Ends
}