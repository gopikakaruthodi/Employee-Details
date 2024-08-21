function displayDetails(){
    console.log(window.location.search);
    
  let urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  let id=urlParams.get("id")
  console.log(id);
  let fetch = localStorage.getItem(id)
  let data= JSON.parse(fetch)
  str=``


  str+=`<tr>
                    <th>ID</th>
                    <td><input type="text" id="input1" value="${data.empId}" readonly ></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td><input type="text" id="input2" value="${data.name}" required></td>
                </tr>
                <tr>
                    <th>Designation</th>
                    <td><input type="text" id="input3" value="${data.des}" required></td>
                </tr>
                <tr>
                    <th>Salary</th>
                    <td><input type="text" id="input4"  value="${data.sal}" required></td>
                </tr>
                <tr>
                    <th>Experience</th>
                    <td><input type="text" id="input5"  value="${data.exp}" required></td>
                </tr>
                <tr>
                    <th></th>
                    <td><button onclick="editDetails(${data.empId})">Edit</button></td>
                </tr>
`
document.getElementById("fetchDatas").innerHTML=str

  

    
    // let ob={}
    // let empId,name,des,sal,exp;
    // ob.name=document.getElementById("input2").value
    // ob.des=document.getElementById("input3").value
    // ob.sal=document.getElementById("input4").value
    // ob.exp=document.getElementById("input5").value
    // // console.log(ob);
    // str=JSON.stringify(ob)
    // console.log(str);
    
    // let a=1;

    // localStorage.setItem(ob.empId,str)
    

}

displayDetails()

function editDetails(id){
    let ob={}
   ob.empId=document.getElementById("input1").value
   ob.name=document.getElementById("input2").value
   ob.des=document.getElementById("input3").value
   ob.sal=document.getElementById("input4").value
   ob.exp=document.getElementById("input5").value
   // console.log(ob);
   str=JSON.stringify(ob)
   console.log(str);
   


   localStorage.setItem(id,str)
   window.location.href="../index.html"

}
 