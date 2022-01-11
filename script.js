
// declare variables 
var count = 0;
let app_data = []; 
var index = -1;


    // the user wants stats for Canada 
    function getCanada(){
        selcetedProvince = "Canada";
        document.getElementById("mySelect").value = "dis";
       
        fetchData();
    }
    
    /// check which province was selcted from the list 
    let canada = "Canada";
    var selcetedProvince = "Canada";
    function myFunction(province){
        selcetedProvince = province;
        fetchData();
    } 

    
    // API Fetch 
    // check if Canada is selected by comparing with the selcted province 
    
    function fetchData(){
        
        var result = canada.localeCompare(selcetedProvince);
        if(result == 0){
            fetch("https://api.covid19tracker.ca/summary", {
                "method": "GET",
            })
    
            .then(Response => {
                return Response.json(); 
            })
            .then(data => {
                if(count == 0){
                    app_data.push(data);
                    count++;
                }
              
                
            })
            .then( () => {
                // change the name 
                document.getElementById("name").innerHTML = selcetedProvince;

                //update the case numbers 
                document.getElementById("casesOut").innerHTML = app_data[0].data[0].total_cases;
                document.getElementById("casesToday").innerHTML = "+" + app_data[0].data[0].change_cases + " Today";
                
                //update the recovered numbers 
                document.getElementById("recoveredOut").innerHTML = app_data[0].data[0].total_recoveries;
                document.getElementById("recoveredToday").innerHTML = "+" + app_data[0].data[0].change_recoveries + " Today";
                
                // update the death numbers 
                document.getElementById("deathsOut").innerHTML = app_data[0].data[0].total_fatalities;
                document.getElementById("deathsToday").innerHTML = "+" +app_data[0].data[0].change_fatalities + " Today";
                

            })
            .catch( error => {
                alert(error);
            })
        }
        
        // Canada is not selected, get stats for selected province/territory  
        else{

            fetch("https://api.covid19tracker.ca/summary/split", {
                "method": "GET",
            })
    
            .then(Response => {
                return Response.json(); 
            })
            .then(data => {
                if(count == 1){
                    app_data.push(data);
                    count++;
                }
                
                
                // find the index of the province selected 
                for(let i = 0; index < 0 && i < 13; i++){
                 var result1 = selcetedProvince.localeCompare(app_data[1].data[i].province);
                 if(result1 == 0){
                    index = i;
                 }
                  
                }
                
             })
            .then( () => {
                // use index to access the required information of the province selected 
                // change the name 
                var Alberta =  selcetedProvince.localeCompare("AB");
                var British_Columbia =  selcetedProvince.localeCompare("BC");
                var Manitoba =  selcetedProvince.localeCompare("MB");
                var New_Brunswick =  selcetedProvince.localeCompare("NB");
                var Newfoundland_and_Labrador =  selcetedProvince.localeCompare("NL");
                var Nova_Scotia =  selcetedProvince.localeCompare("NS");
                var ontario =  selcetedProvince.localeCompare("ON");
                var Prince_Edward_Island =  selcetedProvince.localeCompare("PE");
                var Quebec =  selcetedProvince.localeCompare("QC");
                var Saskatchewan =  selcetedProvince.localeCompare("SK");
                var Northwest_Territories =  selcetedProvince.localeCompare("NT");
                var Nunavut =  selcetedProvince.localeCompare("NU");
                var Yukon =  selcetedProvince.localeCompare("YT");


                if(Alberta == 0){
                        selcetedProvince = "Alberta";
                }
                else if(British_Columbia == 0){
                        selcetedProvince = "British Columbia";
                }
                else if(Manitoba == 0){
                        selcetedProvince = "Manitoba";
                }
                else if(Manitoba == 0){
                        selcetedProvince = "Manitoba";
                }
                else if(New_Brunswick == 0){
                    selcetedProvince = "New Brunswick";
                 }
                else if(Newfoundland_and_Labrador == 0){
                selcetedProvince = "Newfoundland and Labrador";
                }
                else if(Newfoundland_and_Labrador == 0){
                selcetedProvince = "Newfoundland and Labrador";
                }
                else if(Nova_Scotia == 0){
                selcetedProvince = "Nova Scotia";
                }
                else if(ontario == 0){
                selcetedProvince = "Ontario";
                }
                else if(Prince_Edward_Island == 0){
                selcetedProvince = "Prince Edward Island";
                }
                else if(Quebec == 0){
                selcetedProvince = "Quebec";
                }
                else if(Saskatchewan == 0){
                selcetedProvince = "Saskatchewan";
                }
                else if(Northwest_Territories == 0){
                selcetedProvince = "Northwest Territories";
                }
                else if(Nunavut == 0){
                selcetedProvince = "Nunavut";
                }
                else if(Yukon == 0){
                selcetedProvince = "Yukon";
                }


                document.getElementById("name").innerHTML = selcetedProvince;
                
                //update the case numbers 
                document.getElementById("casesOut").innerHTML = app_data[1].data[index].total_cases;
                // only report if change_cases is not 0/ only report if todays case numbers is not 0 
                if(app_data[1].data[index].change_cases != 0){

                    document.getElementById("casesToday").innerHTML = "+" + app_data[1].data[index].change_cases + " Today";
                }
                else {

                    document.getElementById("casesToday").innerHTML = "-";
                }
                
                
                //update the recovered numbers 
                document.getElementById("recoveredOut").innerHTML = app_data[1].data[index].total_recoveries;
                // only report if change_recoveries is not 0/ only report if todays recoveries numbers is not 0 
                if(app_data[1].data[index].change_recoveries != 0){
                    if(app_data[1].data[index].change_recoveries < 0){
                        document.getElementById("recoveredToday").innerHTML = "" + app_data[1].data[index].change_recoveries + " Today";
                    }
                    else{
                        document.getElementById("recoveredToday").innerHTML = "+" + app_data[1].data[index].change_recoveries + " Today";
                    }
                    
                }
                else{
                    document.getElementById("recoveredToday").innerHTML = "-";
                }
                
               
                // update the death numbers 
                document.getElementById("deathsOut").innerHTML = app_data[1].data[index].total_fatalities;
                // only report if change_fatalities is not 0/ only report if todays death numbers is not 0
                if(app_data[1].data[index].change_fatalities != 0){
                    document.getElementById("deathsToday").innerHTML = "+" + app_data[1].data[index].change_fatalities + " Today";
                }
                else{
                    document.getElementById("deathsToday").innerHTML = "-";
                }
                
                
                //reset the index to go through the forloop again 
                index = -1;

             })
            .catch( error => {
                alert(error);
            })



        }
      
    } 
    // make a call to intially get the data 
    fetchData();


