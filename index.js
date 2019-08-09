//if function is called by either checkbox, the other box is automatically checked
function register(checked) {
    if (checked) {
        document.getElementById("checkbox").checked = true;
        document.getElementById("checkbox2").checked = true;
    }
    else {
        document.getElementById("checkbox").checked = false;
        document.getElementById("checkbox2").checked = false;
    }
}



// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date();
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor(23 - now.getHours());
    var minutes = Math.floor(59 - now.getMinutes());
    var seconds = Math.floor(59 - now.getSeconds());
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = "5d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);





function button() {
    //if either button is pressed and checkbox isnt checked an error message pops-up... 
    if (document.getElementById('checkbox').checked === false) {
        alert("Please check the checkbox before proceeding");
    }
    //or else the api is called 
    else {
        //initialize XMLHttpRequest object & use "open" method to get url info
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/", true);
        xhr.send();

        xhr.onreadystatechange = processRequest;
        //function reads the results that gets returned
        function processRequest(e) {
            //if readyState is done(4) and status code is good(200)...
            if (xhr.readyState == 4 && xhr.status == 200) {
                //The html body text is converted into JSON
                var response = JSON.parse(xhr.responseText);
                var x = JSON.parse(response.body)
                //specified JSON value is output onto HTML element with id of "submit1" and "submit2"
                document.getElementById("submit").innerHTML = x.submitok;
                document.getElementById("submit2").innerHTML = x.submitok;

            }
        }
    }

}

