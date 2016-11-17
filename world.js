// JavaScript File
window.onload = function ()
{
    var s = document.getElementById("lookup");
    s.addEventListener("click",function(e)
    {
       e.preventDefault();
       var a = new XMLHttpRequest();
       a.onreadystatechange = b;
       var url = "world.php?country="+document.getElementById("country").value;
       a.open("Get", url);
       a.send();
       
       function b()
       {
           if(a.readyState === XMLHttpRequest.DONE)
           {
               if(a.status === 200)
               {
                   var c = alert(a.responseText);
                  document.getElementById("result").innerHTML = c; 
               }
           }
       }
    });
};