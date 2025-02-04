import { useWalletInfo } from "thirdweb/react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useConnectionStatus } from "@thirdweb-dev/react";

export default function First(){
    const connectedStatus = useConnectionStatus();
    
    return(
        <>
            {connectedStatus ? (
                <Login/>
            ):(
                <Dashboard/>
            )}
        </>
    )

}