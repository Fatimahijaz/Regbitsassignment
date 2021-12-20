function success() {
  var num1 = document.getElementById("myProgress").value;
  var num2 = document.getElementById("inputdata").value;
  var maxx = document.getElementById("myProgress").max;
  var remain = document.getElementById("remaining").innerHTML;
  var fund="Fund has Collected"
 { if (document.getElementById("inputdata").value === "") {
    document.getElementById("buttondata").disabled = true;
  } else {
    document.getElementById("buttondata").disabled = false;
  }}
 { if((!(document.getElementById("inputdata").value === ""))&&(remain==fund))
  {
    document.getElementById("buttondata").disabled = true;
    alert("Fund has already collected")
  }}
 { if ((num2 < 0)||((Number(num2)>Number(remain))&&(!(remain==fund)))) 
  {
    Error =
      " Error: Negative amount or greater than $" + remain + " is not allowed";
    alert(Error);
    document.getElementById("buttondata").disabled = true;
  }}
}

function func() {
  const disableButton = true;
  var num1 = document.getElementById("myProgress").value;
  var num2 = document.getElementById("inputdata").value;
  var maxx = document.getElementById("myProgress").max;
  var num;
  num = Number(num1) + Number(num2);
  var num4 = document.getElementById("donor").innerHTML;
  var num5 = Number(num4) + Number(1);
  document.getElementById("myProgress").value = num;
  var remain = Number(maxx) - Number(num);
  const button = document.getElementById("buttondata");
 if (remain <= 0) {
    document.getElementById("remainstart").innerHTML = "";
    document.getElementById("remaining").innerHTML = "Fund has Collected";
    document.getElementById("remainend").innerHTML = "";
 
  {  if(num4=="")
    {
      document.getElementById("donorstart").innerHTML="Thank you, Donation has Collected. You are only "
      document.getElementById("donor").innerHTML= 1
      document.getElementById("donorend").innerHTML=" donor, who has contributed"
      alert("Thank You! Amount has successfully collected ");
    }
  else{      document.getElementById("donorstart").innerHTML="Thank you, Donation has Collected. You are among "
  document.getElementById("donor").innerHTML= num5
  document.getElementById("donorend").innerHTML=" donors, who has contributed"
  alert("Thank You! Amount has successfully collected ");
  }}

    if (disableButton) {
      button.disabled = "disabled";
    }
  }
  if(remain>0) 
    {
    document.getElementById("remaining").innerHTML = remain;
 { if(num4==="")
  {
    document.getElementById("donorstart").innerHTML="Join the "
  document.getElementById("donor").innerHTML=num5 
  document.getElementById("donorend").innerHTML=" other donor, who have already supported this project. Every dollar helps."
  alert("Thank You! Amount has successfully collected ");
  }
    else {document.getElementById("donorstart").innerHTML="Join the "
    document.getElementById("donor").innerHTML=num5 
    document.getElementById("donorend").innerHTML=" other donors, who have already supported this project. Every dollar helps."
    alert("Thank You! Amount has successfully collected ");
  }
  }
  { if (num2 ===Number(0)) {
    document.getElementById("donor").innerHTML = num4;
  } }
  

 { if(num2===Number(remain))
  {  
     document.getElementById("donorstart").innerHTML=""
  document.getElementById("donor").innerHTML="Thank you, Donation has Collected. You are amoung "+num5 + " donors, who has contributed "
  document.getElementById("donorend").innerHTML=""
  alert("Thank You! Amount has successfully collected ");
  }}
 { if( (num2>Number(remain))&&(!(remain=="Fund has Collected")))
   {  
   
    document.getElementById("buttondata").disabled = true;
  }}



}

}
