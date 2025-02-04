import { ConnectButton, ThirdwebProvider, useConnect } from "thirdweb/react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import First from "./components/First";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useConnectionStatus, useWallet } from "@thirdweb-dev/react";

export function App() {
	// const connectionstatus = useConnectionStatus();

	// return (
	// 		<BrowserRouter>
	// 			<Routes>
	// 				<Route path="/" element={connectionstatus ? (<Login/>):(<Dashboard/>)} />
	// 			</Routes>
	// 		</BrowserRouter>
		
	// );

	// const connectedStatus = useWallet();
	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				<Header />

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
	);

	
}

export default App;
