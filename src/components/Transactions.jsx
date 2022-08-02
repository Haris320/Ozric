import React, { useContext, useState } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";


const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });

    return(
        
        <div className="blue-glassmorphism m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl hover:-translate-y-2">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2 font-manrope font-semibold">
                    {//https://goerli.etherscan.io/tx/0x17099139a25166e351d109ec9c29658b40f75add1dbf052df34093ea4f378796
                    }
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>

                    <p className="text-white text-base">Amount: {amount} ETH</p>
                        {message && (
                            <>
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                        )}                        
                </div>

                        <img
                            src={gifUrl || url}
                            alt="nature"
                            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                        />
                        
                        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                            <p className="text-[#37c7da] font-bold">{timestamp}</p>
                        </div>
            </div>
        </div>
    )
}

const Transactions = () =>{
    const { transactions, currentAccount } = useContext(TransactionContext);

    return(
        <div className="flex w-full justify-center items-center 2xl:px-20" id="transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
            
            {currentAccount ? (
                <h3 className="text-white text-3xl text-center my-2 font-manrope font-extrabold pt-20">
                    Latest Transactions
                </h3>
                ) : (
                <h3 className="text-white font-manrope font text-3xl text-center my-2 pt-20">
                    Latest tansactions from our users
                </h3>
            )}


            {currentAccount ? (
                
                <div className="flex flex-wrap justify-center items-center mt-10">
                {transactions.reverse().map((transaction, i) => (
                    <TransactionsCard key={i} {...transaction} />
                ))}
                
            </div>
            ) : (
                <div className="flex flex-wrap justify-center items-center mt-10">
                {dummyData.reverse().map((transaction, i) => (
                    <TransactionsCard key={i} {...transaction} />
                ))}
            </div>

            )}

            

            

            

            </div>
        </div>
    )
}

export default Transactions;