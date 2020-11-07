import * as React from "react";
import {useEffect, useState} from "react";
import Config from "../config";

export interface IHelloProps {
  name: string;
  count: number;
  onClick: () => void;
}

class TransItem {
  date: string;
  member: string;
  amount: number;
}

export function Hello(props: IHelloProps) {
  const {name, count, onClick} = props;
  const [transactions, setTransaction] = useState<[TransItem]>();

  // https://reactjs.org/docs/hooks-intro.html
  useEffect(  () => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    try {
      fetch(`${Config.apiDomainUrl}/api/cashbox/73`,{method: 'GET'})
        .then(response => response.json())
        .then(json => {
          setTransaction(json.transactions);
        });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const genTransactions = () => {
    if (transactions) {
      return (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{
            transactions.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.member}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      )
    }
  }
  return (
    <>
      <h3>Oh hey - {name}</h3>
      <h1 onClick={() => onClick()}>Number: {count}</h1>
      <h4>Transactions:</h4>
      {genTransactions()}
    </>
  );

}