// Login Page component

import { ConnectButton, useWalletInfo } from "thirdweb/react";
import { client } from "../client";
import Dashboard from "./Dashboard";
import { useConnectionStatus } from "@thirdweb-dev/react";

export default function Login(){
    const connectedStatus = useConnectionStatus();
    return(
        <div>
            (
                <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
                <div className="py-20">
                    <div className="flex justify-center mb-20">
                        <ConnectButton
                            client={client}
                            appMetadata={{
                                name: "Example app",
                                url: "https://example.com",
                            }}
                        />
                    </div>
                </div>
		        </main>
            )
        </div>
    )

}

