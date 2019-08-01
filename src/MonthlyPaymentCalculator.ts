/*
    A = P∗(r(1+r)n)/((1+r)n−1)
    A = the monthly payment.
    P = the principal
    r = the interest rate per month, which equals the annual interest rate divided by 12
    n = the total number of months

 */
export type LoanInformation = {
  principal: number;
  numPayments: number;
  annualInterestRate: number;
};

export default function calculateMonthlyPayment(loanInfo: LoanInformation) {
  const { principal, numPayments, annualInterestRate } = loanInfo;

  const periodicInterestRate = annualInterestRate / 1200;
  const amortizationPayment =
    principal *
    ((periodicInterestRate * Math.pow(1 + periodicInterestRate, numPayments)) /
      (Math.pow(1 + periodicInterestRate, numPayments) - 1));
  return amortizationPayment.toFixed(2);
}
