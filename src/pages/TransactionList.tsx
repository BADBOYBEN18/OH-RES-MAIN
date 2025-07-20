// src/components/TransactionsList.tsx
import React, { useEffect, useState } from 'react';
import axiosClient from '../api';

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axiosClient.get('/transactions/');
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="p-4 rounded border border-stone-300">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-stone-300">
            <th className="p-2">ID</th>
            <th className="p-2">User</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t: any) => (
            <tr key={t.id} className="border-b border-stone-200 hover:bg-stone-50">
              <td className="p-2">{t.id}</td>
              <td className="p-2">{t.user.username}</td>
              <td className="p-2">${t.amount.toFixed(2)}</td>
              <td className="p-2">{new Date(t.created_at).toLocaleDateString()}</td>
              <td className="p-2 capitalize">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
