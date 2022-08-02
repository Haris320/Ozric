import './header.css'
import { shortenAddress } from "../utils/shortenAddress";
import { useEffect, useState, useContext } from 'react'
import timeago from 'epoch-timeago';
import { TransactionContext } from "../context/TransactionContext";


const Header = ({data, column}) => {
  const{currentAccount} = useContext(TransactionContext);
  const TableHeadItem = ({item}) => <th>{item.heading}</th>
  
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        

        if(item['value'] !=0){
          if(columnItem.value == 'value'){
            return <td>{parseInt(item['value']) / (10 ** 18)}</td>
          }

          if(columnItem.value == 'timeStamp'){
            return <td>{timeago(item.timeStamp *1000)}</td>
          }
            

          if(columnItem.value == 'to' || columnItem.value == 'blockHash'){
          return <td>{shortenAddress(item[`${columnItem.value}`])}</td>
        }
        

          return <td>{item[`${columnItem.value}`]}</td>
        }

        
      })}
    </tr>
  )

  const Tab = ({item, it}) =>{
    return(
      <tr>
      <td>
        {item}
      </td>
      <td>
        {it}
      </td>
    </tr>
    )
  }


  return (
    <table className='blue-glassmorphism-norad'>
      <thead>
        <tr className='text-white font-manrope'>
          {
            column.map((item, index) => <TableHeadItem item={item}/>)
          }
        </tr>
      </thead>
      <tbody className='text-white font-manrope'>
        {currentAccount? 
          data.result?.map((item,index) => <TableRow item ={item} column={column}/>)
          :
          <div></div>
        }
        
      </tbody>
    </table>
  )

  }

   
export default Header;