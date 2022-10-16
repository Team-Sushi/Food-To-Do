import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

export async function useAuth() {

    await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true }).then(res => {
        console.log("res.data = " + res.data);
        return res.data;
    });
}



export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}