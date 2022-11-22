//1 - isLoggedIn=>
export const isLoggedIn=(next)=>{
    let token = localStorage.getItem("Token");
    if(token!= null) return true;
    else return false;
    };
//doLogin=> token=> set to localstorage
export const doLogin=(token,next)=>{
    localStorage.setItem("Token",JSON.stringify(token))
    next()
}
//doLogout=> remove from localstorage
export const doLogout=(next)=>{
    localStorage.removeItem("Token")
    next()
}
//get CurrentUser
export const getCurrentUserDetails=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("Token"));
    }else{
        return false;
    }
}