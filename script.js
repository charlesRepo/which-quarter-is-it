function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = monthNames[d.getMonth()];
  const day = String(d.getDate()).padStart(2, '0');
  return `${day} ${month} ${year}`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getCurrentQuarter() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 1-12

  // Define fiscal year quarters (Q1: Apr-Jun, Q2: Jul-Sep, Q3: Oct-Dec, Q4: Jan-Mar)
  let quarter, fiscalYear;
  let startMonth, startYear, endMonth, endYear;

  if (currentMonth >= 4 && currentMonth <= 6) {
    quarter = 'First Quarter';
    fiscalYear = currentYear;
    startMonth = 4;
    startYear = currentYear;
    endMonth = 6;
    endYear = currentYear;
  } else if (currentMonth >= 7 && currentMonth <= 9) {
    quarter = 'Second Quarter';
    fiscalYear = currentYear;
    startMonth = 7;
    startYear = currentYear;
    endMonth = 9;
    endYear = currentYear;
  } else if (currentMonth >= 10 && currentMonth <= 12) {
    quarter = 'Third Quarter';
    fiscalYear = currentYear;
    startMonth = 10;
    startYear = currentYear;
    endMonth = 12;
    endYear = currentYear;
  } else {
    quarter = 'Fourth Quarter';
    fiscalYear = currentYear - 1;
    startMonth = 1;
    startYear = currentYear;
    endMonth = 3;
    endYear = currentYear;
  }

  // Calculate quarter start and end dates
  const startDate = new Date(startYear, startMonth - 1, 1);
  const endDate = new Date(endYear, endMonth, 0); // Last day of end month
  
  // Calculate days remaining in quarter
  const endOfQuarter = new Date(endDate);
  endOfQuarter.setHours(23, 59, 59, 999); // End of the last day
  
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil((endOfQuarter - today) / msPerDay);
  
  const hasQuarterStarted = today > startDate;

  return {
    quarter,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    todayDate: formatDate(today),
    fiscalYear,
    daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
    hasQuarterStarted
  };
}


const quarterObj = getCurrentQuarter();


const textEl = document.querySelector('[data-text]');
textEl && quarterObj && (textEl.innerHTML = `
<p>Currently it's the</p>
<h2>${quarterObj.quarter} of the Fiscal Year ${quarterObj.fiscalYear + 1}</h2>
<p>It ${quarterObj.hasQuarterStarted ? 'started' : 'starts'} at <b>${quarterObj.startDate}</b></p>
<p>and ends on <b>${quarterObj.endDate}</b>.</p>
<br>
<h1 style="color:#FA00FF">${quarterObj.daysRemaining} days</h1>
<p>remaining until end of <br>${quarterObj.quarter}</p>
<br>
<p>Today is the <b>${quarterObj.todayDate}</b></p>
`);
