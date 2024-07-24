function populate() {


    console.log("Function Started");
      // Add Parameters to Pass Here Starts
      
      var uname = "abc";
  
      // Add Parameters to Pass Here Ends
  
      //API Call Code Starts
  
      var xhr = new XMLHttpRequest();
  
      //Change URL of the API Starts
  
      var url = "https://digitalbolt.co/portfolio/shridhar/inventorymanagement/assets/php/inwardoutwardtable.php";
  
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
  
            // Get Variables Ready for Adding Data to Table
            var counter = data2.count;
  
            var tablebody = document.getElementById("tbody");
  
            // Addition Completed
  
            for(let i=0;i<counter;i++)
            {
              var drow = document.createElement("tr");
              tablebody.append(drow);
  
            //For generating id attribute

            //   var id = data2.data[i].cempid;
  
            //   var cnameid = id + "name";
            //   var cempidid = id + "emp";
            //   var croleid = id + "role";
            //   var cemailid = id + "email";
            //   var cph1id = id + "no";
            //   var cph2id = id + "no2";
            //   var caddrid = id + "addr";
            //   var caadhaarid = id + "aadhaar";
            //   var cpanid = id + "pan";

            // var tiochallannumber = document.createElement("td");
            // tiochallannumber.innerText = data2.data[i].iochallannumber;
  
            var tiotitem = document.createElement("td");
            tiotitem.innerText = data2.data[i].iotitem;
            //   dcname.setAttribute("id", cnameid);


            var tiotdate = document.createElement("td");
            tiotdate.innerText = data2.data[i].iotdate;

            var tiotinwardoutward = document.createElement("td");
            tiotinwardoutward.innerText = data2.data[i].iotinwardoutward;

            var tiotuser = document.createElement("td");
            tiotuser.innerText = data2.data[i].iotuser;

            var tiottotal = document.createElement("td");
            tiottotal.innerText = data2.data[i].iottotal;

  
              var ttdbtn = document.createElement("td");
              var tbtn = document.createElement("button");
              tbtn.innerText = "View Details";
  
              ttdbtn.addEventListener('click', function () {
                myfunction(abc);
              });
              tbtn.setAttribute("type", "submit");
              tbtn.setAttribute("class", "btn btn-primary");
  
              // drow.append(tiochallannumber);
              drow.append(tiotitem);
              drow.append(tiotdate);
              drow.append(tiotinwardoutward);
              drow.append(tiotuser);
              drow.append(tiottotal);


              ttdbtn.append(tbtn);
              drow.append(ttdbtn);
  
            }
  
          }
          else {
            alert(data2.status);
          }
  
          //Coding in Here Ends
  
        }
  
      };
  
      //Response Code Goes Here Ends
  
  
  
      // Send Data in JSON Starts
  
      var data = JSON.stringify({});
      xhr.send(data);
  
      // Send Data in JSON Ends
  
    }
  