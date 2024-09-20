import { useState } from "react";
import { ethers } from 'ethers';

declare global {
    interface Window {
        ethereum: any;
    }
}

const Navbar = () => {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [account, setAccount] = useState<string | null>(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send('eth_requestAccounts', []);
            setAccount(accounts[0]);
            console.log('Wallet Address:', accounts[0]);
        } else {
            alert('MetaMask is not installed');
        }
    };

    const disconnectWallet = () => {
        setAccount(null); // Menghapus akun yang tersimpan di state
        console.log('Wallet disconnected');
    };

    return (
        <div className='absolute top-0 w-full h-12 flex justify-between items-center p-12 z-50'>
            <span className="text-2xl font-black text-[#580EF6]">
                NFT Junction
            </span>

            {account ? (
                <div>
                    <span className="mr-4 text-lg">{account}</span>
                    <button
                        className="px-4 py-2 bg-red-500 text-white font-bold rounded-full transition-all duration-300 ease-out"
                        onClick={disconnectWallet}
                    >
                        Disconnect
                    </button>
                </div>
            ) : (
                <button
                    className={`px-4 py-2 bg-blue-500 text-white font-bold rounded-full transition-all duration-300 ease-out ${isClick ? "scale-95" : "scale-100"}`}
                    onMouseDown={() => setIsClick(true)}
                    onMouseUp={() => setIsClick(false)}
                    onMouseLeave={() => setIsClick(false)}
                    onClick={connectWallet}
                >
                    Connect
                </button>
            )}
        </div>
    );
};

export default Navbar;
