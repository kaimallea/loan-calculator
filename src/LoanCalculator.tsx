import React, { useState } from 'react';
import Input from './Input';
import calculateMonthlyPayment from './MonthlyPaymentCalculator';

export default function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = () => {
    const output = calculateMonthlyPayment({
      principal: parseInt(amount, 10),
      numPayments: parseInt(term, 10),
      annualInterestRate: parseFloat(interestRate),
    });

    setOutput(output);
  };

  return (
    <>
      <Input
        name="amount"
        type="number"
        label="Loan Amount:"
        value={amount}
        placeholder="$"
        onChange={e => setAmount(e.target.value)}
      />
      <Input
        name="term"
        type="number"
        label="Loan Term:"
        value={term}
        placeholder="Months"
        onChange={e => setTerm(e.target.value)}
      />
      <Input
        name="interestRate"
        type="number"
        label="Interest Rate:"
        value={interestRate}
        placeholder="%"
        onChange={e => setInterestRate(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <input type="text" value={output} />
    </>
  );
}
