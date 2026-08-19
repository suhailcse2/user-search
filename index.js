let form=document.querySelector("#userform") ;


form.addEventListener("submit",async (e) => {
e.preventDefault()
let Name=document.querySelector("#name").value;
let Phone=document.querySelector("#phone").value;
let Email=document.querySelector("#email").value;
let my_div=document.createElement("div")
// my_div.innerHTML=`
// <h1>Name : ${user.name} </h1>
// <h1>Email : ${user.email} </h1>
// <h1>Phone : ${user.phone} </h1>
// <h1>Id: ${data.id}
// `

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
console.log(data.id);

let my_div=document.createElement("div")
my_div.innerHTML=`
<h1>Name : ${data.name} </h1>
<h1>Email : ${data.email} </h1>
<h1>Phone : ${data.phone} </h1>
<h1>Id: ${data.id}</h1>
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

let new_div=document.createElement("div")
new_div.classList.add("removehu")
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
    let Name=document.querySelector("#name");
    Name.value=`${user.name}`
let Phone=document.querySelector("#phone");
    Phone.value=`${user.phone}`
let Email=document.querySelector("#email");
 Email.value=`${user.email}`

}
 catch(error){
        console.log(error);
        
    }
    
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
let det=document.querySelector(".removehu");
        document.body.removeChild(det);
    }
})
    
   
//  form.addEventListener("submit", (e) => {

//     e.preventDefault();

//     let Name = document.querySelector("#name").value;
//     let Phone = document.querySelector("#phone").value;
//     let Email = document.querySelector("#email").value;

//     let user = {
//         name: Name,
//         phone: Phone,
//         email: Email
//     };

//     console.log(user);
// })