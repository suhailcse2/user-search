let users = [];
let current_user = {}
let form=document.querySelector("#userform") ;
let k=10;

form.addEventListener("submit",async (e) => {
e.preventDefault()
let Name=document.querySelector("#name").value;
let Phone=document.querySelector("#phone").value;
let Email=document.querySelector("#email").value;

k++;

let user={
    name:Name,
    email:Email,
phone:Phone
}


try{
let response=await fetch("https://jsonplaceholder.typicode.com/users" , 
    {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
if(!response.ok){
    throw new Error("error hua");
    
}
let data=await response.json();
console.log(response.status);

data.id=k;
users.push(data);
console.log(users);
console.log('data transfer');
confirm("are you Really Want To added That")


let my_div=document.createElement("div")
my_div.classList.add("userlist")

my_div.id = `user${data.id}`;
alert('user added');


my_div.innerHTML=`
 <table>
        <tr>
            <th>ID</th>
            <td>${data.id}</td>
        </tr>

        <tr>
            <th>Name</th>
            <td>${data.name}</td>
        </tr>

        <tr>
            <th>Email</th>
            <td>${data.email}</td>
        </tr>
        

        <tr>
            <th>Phone</th>
            <td>${data.phone}</td>
        </tr>

       

    </table>
`
document.body.appendChild(my_div)

    }
    catch(error){
        console.log(error);
        
    }
})
    let button=document.querySelector("#getuser");
    button.addEventListener("click",async () => {

    try{
        let my_id=document.querySelector("#idse").value;

      
let response=await fetch(`https://jsonplaceholder.typicode.com/users/${my_id}`)
    
if(!response.ok){
    throw new Error("error hua hai");
    
}
let user=await response.json()


users.push(user);
console.log(users);
console.log('user added');
alert('user added');


let new_div=document.createElement("div")   
new_div.classList.add("userlist")
new_div.id = `user${user.id}`;
new_div.innerHTML=`
         <table>
        <tr>
            <th>ID</th>
            <td>${user.id}</td>
        </tr>

        <tr>
            <th>Name</th>
            <td>${user.name}</td>
        </tr>

        <tr>
            <th>Username</th>
            <td>${user.username}</td>
        </tr>

        <tr>
            <th>Email</th>
            <td>${user.email}</td>
        </tr>
        

        <tr>
            <th>Phone</th>
            <td>${user.phone}</td>
        </tr>

        <tr>
            <th>City</th>
            <td>${user.address.city}</td>
        </tr>

        <tr>
            <th>Company</th>
            <td>${user.company.name}</td>
        </tr>
    </table>
        `
document.body.appendChild(new_div);

}
 catch(error){
        console.log(error);
        
    }
    
})
let fd=document.querySelector("#find")
fd.addEventListener("click", async ()=> {

let my_id = document.querySelector("#idse").value;

let foundUser = null;

for (let i = 0; i < users.length; i++) {

    if (users[i].id == my_id) {
        console.log("user found");
alert('user found');

        foundUser = users[i];
        break;
    }
    else {
    console.log("user not found");
    alert('user not found');
    
}
}

 
document.querySelector("#name").value=`${foundUser.name}`;
      document.querySelector("#phone").value=`${foundUser.phone}`;
document.querySelector("#email").value=`${foundUser.email}`;
let det=document.querySelector(`#user${my_id}`);
det.style.background = "rgb(199, 194, 194)";




})
let dltb=document.querySelector("#dtb")
   dltb.addEventListener("click", async ()=> {

   let my_id=document.querySelector("#idse").value;

      
let response=await fetch(`https://jsonplaceholder.typicode.com/users/${my_id}`,
        
        {
            method: "DELETE"
        }
    );


    if (response.ok) {
        console.log("User deleted");
let det=document.querySelector(`#user${my_id}`);
confirm('are you really want to delete user')
        document.body.removeChild(det);
    }
})

    let edit_b=document.querySelector("#edit")
   edit_b.addEventListener("click", async ()=> {

   let my_id=document.querySelector("#idse").value;
let Name=document.querySelector("#name").value;
      let Phone=document.querySelector("#phone").value;
let Email=document.querySelector("#email").value;
if(my_id<11){
 let updatedUser = {
       name: `${Name}`,
      email : `${Email}`,
          phone: `${Phone}`
    };

let response=await fetch(`https://jsonplaceholder.typicode.com/users/${my_id}`,
        
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(
            
            updatedUser)
        }
    );

    let data = await response.json();

 if (response.ok) {
        console.log("User update");
        confirm('are you really want to update user data')
let det=document.querySelector(`#user${my_id}`);

det.innerHTML=`
         <table>
        <tr>
            <th>ID</th>
            <td>${data.id}</td>
        </tr>

        <tr>
            <th>Name</th>
            <td>${data.name}</td>
        </tr>

        <tr>
            <th>Username</th>
            <td>${data.username}</td>
        </tr>

        <tr>
            <th>Email</th>
            <td>${data.email}</td>
        </tr>
        

        <tr>
            <th>Phone</th>
            <td>${data.phone}</td>
        </tr>

        <tr>
            <th>City</th>
            <td>${data.address.city}</td>
        </tr>

        <tr>
            <th>Company</th>
            <td>${data.company.name}</td>
        </tr>
    </table>}
        `
 }}
 else{
    let det=document.querySelector(`#user${my_id}`);

    det.innerHTML=`
         <table>
        <tr>
            <th>ID</th>
            <td>${my_id}</td>
        </tr>

        <tr>
            <th>Name</th>
            <td>${Name}</td>
        </tr>

    

        <tr>
            <th>Email</th>
            <td>${Email}</td>
        </tr>
        

        <tr>
            <th>Phone</th>
            <td>${Phone}</td>
        </tr>

    </table>}
        `
        
 }
}
   
)
