'use client'

import { useState } from "react";
import { getBrowserProvider } from "@/services/provider";

export default function WalletConnect() {
    const [address, setAddress] = useState('')

    const connectWallet = async () => {
        const provider = getBrowserProvider()
        if (!provider) {
            alert('MetaMask not found')
            return
        }

        const accounts = await provider.send("eth_requestAccounts", [])
        setAddress(accounts[0])
    }

    return (        
        <div style={{ marginTop: '16px' }}>
            {address ? (
            <p>Connected: {address}</p>
            ) : (
            <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    ) 
}