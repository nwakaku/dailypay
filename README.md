
## Daily_Pay

A decentralized mobile platform built on polygon

Inspired by platforms KUDA and Chippper Cash.

Every purchase triggers a smart contract event, and transactions are created as NFTs with receipts that may be submitted as proof of purchase in-store and to Vendors. 

Live demo: <a href="" target="_blank">here</a>

<b>Note must be connected to Mumbai network if using default build configuration.</b>

Video: <a href="" target="_blank">Demo video</a>


## Pain points:

- In Nigeria, blockchain and cryptocurrency are not accepted.
- Banks and microfinance institutions are not spread and suffer from the drawbacks of existing centralized systems (vendor lock in, variable pricing, outages, credit card fees).
- Banks and microfinance institutions frequently charge monthly fees regardless of usage.
- Unlike blockchain, which uses a decentralized permanent record-keeping method of transactions, transaction history is frequently entrusted to a centralized authority..


### Features

- Create a new wallet to handle payments in order to assist new businesses in accepting and accepting cryptocurrency payments.
- IPFS-powered storage and transaction logging.
- When the payment is complete, the user receives a receipt that they may display to the person at the store/restaurant.
- For the live page, upload images and descriptions. Each page's metadata is given over a Ceramic stream and is hosted without charge to the end user.
- Display downloadable product pages and images housed on IPFS via distributed delivery and hosting.
- Pricing and checkout are integrated using the Unlock protocol (other payment integrations could also be added).
- An event from the smart contract is also fired, which can be subscribed to from anywhere.

### Technologies used

- CERAMICS
- NFTPORT 
- COVALENTAPI 
- IPFS/Filecoin (Hosting and sharing of assets): 
- POLYGON BLOCKCHAIN


### How to run

git clone

cd dailypay

<pre>
    REACT_APP_STORAGE_KEY 
    REACT_APP_COVALENT_KEY 
    REACT_APP_NFT_PORT_KEY 
    REACT_APP_INFURA_KEY
</pre>

`yarn; yarn start`
