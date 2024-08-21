function addDetails(){
    
    let ob={}
    let empId,name,des,sal,exp;
    ob.empId=document.getElementById("input1").value
    ob.name=document.getElementById("input2").value
    ob.des=document.getElementById("input3").value
    ob.sal=document.getElementById("input4").value
    ob.exp=document.getElementById("input5").value
    // console.log(ob);
    str=JSON.stringify(ob)
    console.log(str);
    if((ob.empId,ob.name,ob.des, ob.sal,ob.exp)){
        if((localStorage.getItem(ob.empId))){
            alert("Employee ID Already Exist")
            
        }
       else{
        localStorage.setItem(ob.empId,str)
        window.location.href="../index.html"
       }
    }
    else{
        alert("Fill All Fields Before Submitting")
    }
    

    
    

}