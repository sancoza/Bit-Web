var p = document.getElementById('country')

function loadDoc() {
    var xhttp= new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    }
    xhttp.open('GET',"http://www.geoplugin.net/xml.gp?ip=188.2.60.76", true)
    xhttp.send();
}

function myFunction(xml) {
    
    var xmlDoc = xml.responseXML;

    var country = xmlDoc.querySelector('geoplugin_countryName');
    var city = xmlDoc.querySelector('geoplugin_city');
    var region =xmlDoc.querySelector('geoplugin_region');

    p.textContent = country.textContent + ': ' + city.textContent + ' (' + region.textContent + ' )';
   
     
}