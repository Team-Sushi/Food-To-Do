import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

export async function useAuth() {
    const response = await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true })

    console.log("response.data = " + response.data);

    return Promise.resolve(response.data);
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}