var p = document.getElementById('country')
function loadDoc() {
    var xhttp= new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    }
    xhttp.open('GET',"http://www.geoplugin.net/xml.gp?ip=178.148.198.229", true)
    xhttp.send();
}

function myFunction(xml) {
    
    var xmlDoc = xml.responseXML;
    var country = xmlDoc.querySelector('geoplugin_countryName');
    p.textContent = country.textContent; 
}