import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

export async function useAuth() {
    let res = await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true });
    console.log("res.data = " + res.data);
 
    let auth = await res.data;
    console.log("auth =" + auth);
    return await auth;
}



export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}