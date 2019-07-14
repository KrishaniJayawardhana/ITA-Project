/**
 * Created by Viraj Dissanayake on 3/19/2017.
 */
function svalidate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    if (u == "san" && p=="san") {
        alert("login successful");
        window.location = "2.html"; /*I implemented this cuz if you want to direct the user */
        /*to a another page after a successful login, you can use this line*/
        return false;
    }
    else
        alert("username or password is wrong!")
    return false;
}