let userdata = []
const saveData = ()=>{
    let alldata = localStorage.getItem('userinfo')
    let data = JSON.parse(alldata)
    let len = (data!=null) ? data.length+1 : 1
    let nm = document.getElementById('name').value
    let age = document.getElementById('age').value
    let userid = document.getElementById('userid').value
    if(userid != ''){
        //update code
        let res = data.map((i,index)=>{
            if(i.id == userid){
                i.name = nm
                i.age = age
            }
            return i
        })
        userdata = res
        // localStorage.setItem("userinfo",JSON.stringify(res))

    } else {
        //insert code
        let obj = {
            id:len,
            name:nm,
            age:age
        }
        userdata.push(obj)
        // localStorage.setItem("userinfo",JSON.stringify(userdata))

    }
    localStorage.setItem("userinfo",JSON.stringify(userdata))
    disp()
    document.getElementById('userid').value = ''
    document.userfrm.reset()
}
const delData = (id)=>{
    let alldata = localStorage.getItem('userinfo')
    let data = JSON.parse(alldata)
    //1 2  4 5 id=3
    let res = data.filter((i)=>{
            return i.id != id
    })
    localStorage.setItem("userinfo",JSON.stringify(res))
    disp()
}
const editData = (id)=>{
    let alldata = localStorage.getItem('userinfo')
    let data = JSON.parse(alldata)
    let res = data.find((i)=>{
            return i.id == id
    })
    console.log(res);
    
    document.getElementById('name').value = res.name    
    document.getElementById('age').value = res.age    
    document.getElementById('userid').value = id    
}

const disp = ()=>{
    let tr = ''
    let alldata = localStorage.getItem('userinfo')
    let data = JSON.parse(alldata)
    data.map((i)=>{
        tr += `<tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>
                        <button onclick="editData(${i.id})">Edit</button>
                        <button onclick="delData(${i.id})">Delete</button>
                    </td>
                </tr>`
    })
    document.getElementById('userdata').innerHTML = tr
} 
disp()  