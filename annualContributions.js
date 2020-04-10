const annualContribution = ({
  initialValue,
  companyContribution,
  taxRate,
  investmentYears,
  investmentRate
}) => {
  const rrspContribution = initialValue * (1 + companyContribution)
  const taxRefund = rrspContribution * taxRate
  const investmentPrincipal = rrspContribution + taxRefund

  let accumulation = 0
  let yearsRemaining = investmentYears

  while (yearsRemaining > 0) {
    accumulation += investmentPrincipal * Math.pow((1 + investmentRate), yearsRemaining)
    yearsRemaining -= 1
  }

  console.log('ACCUMULATION ===')
  console.log(accumulation)
  console.log('TOTAL SEED MONEY ===')
  const totalSeed = initialValue * investmentYears
  console.log(totalSeed)
  console.log('AMOUNT EARNED ===')
  const amountEarned = accumulation - totalSeed
  console.log(amountEarned)
  console.log('PERCENTAGE EARNED ===')
  console.log(amountEarned / totalSeed)
}

initialValue = 10000
companyContribution = 0.22
taxRate = 0.31
investmentYears = 30
investmentRate = 0.02

result = calculator({ initialValue, companyContribution, taxRate, investmentYears, investmentRate })