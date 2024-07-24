function assettable() {


    console.log("Function Started");
      // Add Parameters to Pass Here Starts
      
      var uname = "abc";
  
      // Add Parameters to Pass Here Ends
  
      //API Call Code Starts
  
      var xhr = new XMLHttpRequest();
  
      //Change URL of the API Starts
  
      var url = "https://digitalbolt.co/portfolio/shridhar/inventorymanagement/assets/php/assettable.php";
  
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
  
            var tablebody = document.getElementById("tbody-asset");
  
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
  
            var tassetname = document.createElement("td");
            tassetname.innerText = data2.data[i].assetname;
            //   dcname.setAttribute("id", cnameid);


            var tassetdescription = document.createElement("td");
            tassetdescription.innerText = data2.data[i].assetdescription;

            var tassetvalue = document.createElement("td");
            tassetvalue.innerText = data2.data[i].assetvalue;

            var tassetdate = document.createElement("td");
            tassetdate.innerText = data2.data[i].tassetdate;

              var ttdbtn = document.createElement("td");
              var tbtn = document.createElement("button");
              tbtn.innerText = "View Details";
  
              ttdbtn.addEventListener('click', function () {
                myfunction(abc);
              });
              tbtn.setAttribute("type", "submit");
              tbtn.setAttribute("class", "btn btn-primary");
  
              drow.append(tassetname);
              drow.append(tassetdescription);
              drow.append(tassetvalue);
              drow.append(tassetdate);


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
  