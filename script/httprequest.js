

var http = new XMLHttpRequest();
var url = 'http://localhost/DanaAPI/api/values';
var params = 'value=dodi';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http);
    }
}
http.send(params);