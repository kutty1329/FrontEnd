let Action=()=>
{
    let a=document.forms['kuttyapp'].user.value;


    let active=true;

    if(a.length<=0)
    {
        document.getElementById('userdetails').innerHTML="Enter Name Fisrt";
        active=false;
    }

}