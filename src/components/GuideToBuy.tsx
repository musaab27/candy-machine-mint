

export const GuideToBuy = () => {
    return (
        <div id="guide">
            <div className="container">
                <h2 className="font-bold text-6xl mb-8 team-card" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, marginBottom: "20px", color: "white" }}>Minting Guide</h2>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, fontSize: "18px", color: "white" }}>Once minting begins, you will be able to connect your wallet and begin minting.</p>
                <ol style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, fontSize: "18px", color: "white" }}>
                    <li style={{marginBottom: "20px"}}>
                        1. Connect your wallet using this button.
                        <img src={`${process.env.PUBLIC_URL}/ConnectWallet.png`} alt="connectWallet"/>
                    </li>
                    <li style={{marginBottom: "20px"}}>
                        2. Select your wallet.
                        <img src={`${process.env.PUBLIC_URL}/SelectWallet.png`} alt="SelectWallet"/>
                    </li>
                    <li style={{marginBottom: "20px"}}>
                        3. Once your wallet is approved, you should be able to mint.
                    </li>
                    <li style={{marginBottom: "20px"}}>
                        4. A screen like the image below should appear. Approve the transaction. 
                        <img src="approveTransaction.png" alt="approveTransaction" />
                    </li>
                    <li style={{marginBottom: "20px"}}>
                        5. If you look into your Collectibles Tab in your wallet, your NFT should appear there.
                        <img src="NFTinWallet.png" alt="NFT"/>
                    </li>
                </ol>
            </div>
        </div>


    );
}



