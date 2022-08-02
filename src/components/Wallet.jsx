import React from 'react'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Header from './Header'
import { TransactionContext } from "../context/TransactionContext";
export const Wallet = () => {

    const{currentAccount} = useContext(TransactionContext);
    

    //console.log( localStorage.getItem('a'))

    var apiKey ='Y8U5U7KCSYHAWHHASK6PT5ADTUQBAP6N8E'
    var addy = '' 

    if(currentAccount){
        addy=currentAccount
    }
    


    var trans = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${addy}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`


    //console.log(trans)
    const [dataTable, setDataTable] = useState([]);   
        useEffect(() =>{
            axios(trans)
            .then(res => setDataTable(res.data))
            .catch(err => console.log(err))
        }, [])

        const column = [
            {heading: 'To/From', value:'to'},
            {heading: 'Value (ETH)', value: 'value'},
            {heading: 'Age', value: 'timeStamp'},
            {heading: 'Block', value: 'blockHash'}
        ]

    return (
        <div className='pt-20 flex flex-col justify-center items-center' id='wallet'>
            {!currentAccount && (<h1 className='text-white text-3xl text-center my-2 font-manrope font-extrabold pt-16'>
                Connect your metamask wallet to see your latest transactions</h1>
            )}
            {!currentAccount && (<h1 className='text-white text-lg text-center my-2 font-manrope font-extrabold'>
                or <br />
                <div className='hover:text-black cursor-pointer '>
                    click here to watch my video demo
                </div>
                </h1>
            )}
            {currentAccount && (<h1 className='text-white text-3xl text-center my-2 font-manrope font-extrabold pt-16'>Your Latest Transactions</h1>)}

            
            {dataTable.message!='NOTOK' && <Header data={(dataTable)} column = {column}/>}
            
             
            
        </div>
    )
}

export default Wallet
