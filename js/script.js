function myFunction(event)
{
    var pswTest=document.myform.psw.value;
    var x=event.clientX;
    if(pswTest.length<7)
    {
        document.getElementById("btn").style.backgroundColor="#F32013";
        document.getElementById("psw").style.borderColor="#F32013";
        if(x<915 && x>842)
        {
        document.getElementById("btn").style.marginLeft="1px";
                
        }
        else if(x<525 && x>453)
        {
        document.getElementById("btn").style.marginLeft="400px";
                
        }
        else
        {
        document.getElementById("btn").style.marginLeft="400px";
        }
    }
    else
    {
        document.getElementById("psw").style.borderColor="#4BB543";
        document.getElementById("btn").style.marginLeft="180px";
        document.getElementById("btn").style.backgroundColor="#4BB543";
    }  
}