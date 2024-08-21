function displayData(){
    // alert("hello")
    // console.log(localStorage.length);
      str=``
    for(i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        // console.log(key);
        let fetch=localStorage.getItem(key)
        // console.log(fetch);

        let data=JSON.parse(fetch)
        // console.log(typeof(data));
        // console.log(data);
        // console.log(data.name);

      
        str+=`<tr>
                        <td>${data.empId}</td>
                        <td>${data.name}</td>
                        <td>${data.des}</td>
                        <td>${data.sal}</td>
                        <td>${data.exp}</td>

                        <td>
                            <a href="../pages/edit.html?id=${data.empId}"><button id="edit">Edit</button></a>
                            <button id="del" onclick="deleteDetails(${data.empId})">Delete</button>
                        </td>
                    </tr>`

    }
if(localStorage.length==0){
    alert("Add Employee Details")
}  
else{
    document.getElementById("fetchDatas").innerHTML=str  

}  


}

displayData()

function deleteDetails(value){
    if(confirm("Do You Want To Delete This Employee?")){
        localStorage.removeItem(value) 
        displayData()


    }
   

}


document.getElementById("search").addEventListener("keyup",(e)=>{
    str=``
    for(i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        // console.log(key);
        let fetch=localStorage.getItem(key)
        // console.log(fetch);

        let data=JSON.parse(fetch)
    // console.log(e.target.value);
        const asd=data.name.toLowerCase().includes(e.target.value.toLowerCase());
        if(asd){
            str+=`<tr>
                        <td>${data.empId}</td>
                        <td>${data.name}</td>
                        <td>${data.des}</td>
                        <td>${data.sal}</td>
                        <td>${data.exp}</td>

                        <td>
                            <a href="../pages/edit.html?id=${data.empId}"><button id="edit">Edit</button></a>
                            <button id="del" onclick="deleteDetails(${data.empId})">Delete</button>
                        </td>
                    </tr>`
        }

    }
        
    document.getElementById("fetchDatas").innerHTML=str

    })
    
