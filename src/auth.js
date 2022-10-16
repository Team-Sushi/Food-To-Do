import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

export async function useAuth() {
    const [authed, setAuthed] = React.useState(false);

    await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true }).then(res => {
        console.log("res.data = " + res.data);
        setAuthed(res.data);
        console.log(authed);
        return authed;
    });
}



export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}