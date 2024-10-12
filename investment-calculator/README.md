# Investment Calculator

## Overview

This project is a **React-based Investment Calculator** that allows users to input financial details, such as initial investment, annual contributions, and expected returns, to project their investment growth over time. It provides a user-friendly interface to display annual investment summaries, including total capital, yearly interest, and total returns.

## Features

- **Dynamic Input Fields**: Users can enter custom values for initial investment, annual contributions, expected return rates, and duration.
- **Real-time Calculations**: Results are updated instantly based on user input.
- **Investment Summary Table**: Displays yearly breakdowns of investments and interest growth.
- **Validation**: Ensures the duration is at least 1 year before displaying results.

---

## Usage

Enter values in the input fields:

- **Initial Investment**: Amount to invest initially.
- **Annual Investment**: Amount to add every year.
- **Expected Return**: Annual percentage return.
- **Duration**: Investment period in years.

If the duration is valid, a results table will display the projected yearly growth and investment details.

## Components

### 1. Header

Displays the app’s logo and title.

```javascript
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
```

### 2. UserInput

Contains input fields for user data, with onChange handlers to update state.

```javascript
export default function UserInput({ onChange, UserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input
          type="number"
          value={UserInput.initialInvestment}
          onChange={(e) => onChange("initialInvestment", e.target.value)}
        />
      </div>
      {/* Other fields omitted for brevity */}
    </section>
  );
}
```

### 3. Results

Displays the yearly breakdown of investment growth in a table.

```javascript
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{yearData.interest}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

## Utilities

### `calculateInvestmentResults`

This function computes yearly investment growth based on user inputs.

```javascript
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interest = investmentValue * (expectedReturn / 100);
    investmentValue += interest + annualInvestment;
    annualData.push({ year: i + 1, interest, valueEndOfYear: investmentValue });
  }

  return annualData;
}
```

### `formatter`

Formats numbers as currency using the Intl API.

```javascript
// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interest = investmentValue * (expectedReturn / 100);
    investmentValue += interest + annualInvestment;
    annualData.push({ year: i + 1, interest, valueEndOfYear: investmentValue });
  }

  return annualData;
}
```

The browser-provided Intl API is used to prepare a formatter object
This object offers a "format()" method that can be used to format numbers as currency
Example Usage: formatter.format(1000) => yields "$1,000"
