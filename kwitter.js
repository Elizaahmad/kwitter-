function addUser()
{
    var User_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",User_name);

    window.location="kwitter_room.html";
}