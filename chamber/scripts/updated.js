var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp+" am"
}