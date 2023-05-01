export async function handleRegister(email,username,password){
    try {
        const request= await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({
                email,
                username,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        });
    const data = await request.json();
    if(data.error_message){
        toast.error(data.error_message);
    } else {
        toast.success(data.message);
        navigate("/");
    }
} catch(err) {
    console.log(err);
    toast.error("Account creation failed");
}
}
export async function handleLogin(username,password, navigate){
    try{
        const request = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await request.json();
        if(data.error_message){
            toast.error(data.error_message);
        } else {
            toast.success(data.message);
            localStorage.setItem("_id", data.data._id);
            localStorage.setItem("_myEmail", data.data._email);
            navigate("/dashboard");
        }
    } catch(err) {
        console.log(err);
        
    }
}
export async function handleCreateSchedule(selectedTimezone, schedule, navigate){
    try{
        const request = await fetch("http://localhost:4000/schedule/create", {
            method: "POST",
            body: JSON.stringify({
                userId: localStorage.getItem("_id"),
                timezone: selectedTimezone,
                schedule,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
       navigate(`/profile/${localStorage.getItem("_id")}`)
    } catch(err) {
        console.error(err);
        
    }
}
export const time = [
    {id:"null", t:"Select"},
    {id:"7", t:"7:00 AM"},
    {id:"8", t:"8:00 AM"},
    {id:"9", t:"9:00 AM"},
    {id:"10", t:"10:00 AM"},
    {id:"11", t:"11:00 AM"},
    {id:"12", t:"12:00 PM"},
    {id:"13", t:"1:00 PM"},
    {id:"14", t:"2:00 PM"},
    {id:"15", t:"3:00 PM"},
    {id:"16", t:"4:00 PM"},
    {id:"17", t:"5:00 PM"},
    {id:"18", t:"6:00 PM"},
    {id:"19", t:"7:00 PM"},
];