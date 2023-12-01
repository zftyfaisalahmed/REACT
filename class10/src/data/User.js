import { toast } from "react-toastify";
// initial data
const users = JSON.parse(localStorage.getItem('users')) || [];
console.log("Users :",users);
// console.log("Users.Email :",users.email);

// Register
const registerUser = async (user) => {
    console.log('Register =', user);

    const extEmail = users.find((item)=> item.email === user.email);
    const extMobile = users.find((item)=> item.mobile === user.mobile);

    if(extEmail){
        toast.warning(`${user.email} is already Exists`)
    }else if(extMobile){
        toast.warning(`${user.mobile} is already Exists`)
    }else{
        users.push(user);
        console.log(users);
        saveUsers(users)

        toast.success(`Hi ${user.name} You have registered Successfully`);
        window.location.href = "/login";
    }
};

// Save data
const saveUsers=(data)=>{
    localStorage.setItem('users', JSON.stringify(data));
}


const loginUser = async (user) => {
    const extUser = users.find((item) => item.email === user.email)
    
    if (!extUser){
        toast.warning(`${user.email} doesn't exits.`);
    } else {
        // if (condition) {
        //     toast.warning(`${user.email} doesn't exists`)
        // } else {
        //     toast.warning(`${user.email} exits`)
        // }
        toast.success(`${user.email} exits`)
    }
};

export {registerUser , loginUser};
