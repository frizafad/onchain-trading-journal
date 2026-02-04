'use client'

import { useState, useEffect } from "react";
import { formatEther, BrowserProvider } from "ethers";
import { getBrowserProvider } from "@/services/provider";


export default function WalletConnect() {
    const [address, setAddress] = useState<string>('')
    const [network, setNetwork] = useState<string>('')
    const [balance, setBalance] = useState<string>('')

    const connectWallet = async () => {
        const provider = getBrowserProvider()
        if (!provider) {
            alert('MetaMask not found')
            return
        }

        const accounts = await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner()

        setAddress(accounts[0])

        const network = await provider.getNetwork()
        setNetwork(network.name)

        const balance = await provider.getBalance(accounts[0])
        setBalance(formatEther(balance))
    }

    return (        
        <div style={{ marginTop: '16px' }}>

            {!address ? (<button onClick={connectWallet}>Connect Wallet</button>) 
            : (
                <div> 
                <p>Address: {address}</p>
                <p>Network: {network}</p>
                <p>Balance: {Number(balance).toFixed(4)}</p>
                </div>
            ) }

        </div>
    ) 
}