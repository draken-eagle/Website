let button = document.getElementById("submit");
button.addEventListener("click", function(){
    let fname = document.getElementsByName("firstname").value;
    let lname = document.getElementsByName("lastname").value;
    let email = document.getElementsByName("email").value;
    let content = document.getElementsByName("content").value;
            
    if(fname =="" || lname == "" || email""){
        alert("Please enter the fields");
    }
    else{
        var data ={
            firtname: fname,
            lastname: lname,
            email: email,
            content = content,
        }
        var database = firebase.database();
        var ref = database.ref("records");
                
        ref.push(data);
                
     }
})