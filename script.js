function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getCurrentQuarter() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 1-12
  const currentDate = today.getDate();
  
  // Define fiscal year quarters (Q1: Apr-Jun, Q2: Jul-Sep, Q3: Oct-Dec, Q4: Jan-Mar)
  let quarter, startMonth, endMonth, fiscalYear;
  
  if (currentMonth >= 4 && currentMonth <= 6) {
    quarter = 'First Quarter';
    startMonth = 4;
    endMonth = 6;
    fiscalYear = currentYear;
  } else if (currentMonth >= 7 && currentMonth <= 9) {
    quarter = 'Second Quarter';
    startMonth = 7;
    endMonth = 9;
    fiscalYear = currentYear;
  } else if (currentMonth >= 10 && currentMonth <= 12) {
    quarter = 'Third Quarter';
    startMonth = 10;
    endMonth = 12;
    fiscalYear = currentYear;
  } else {
    quarter = 'Fourth Quarter';
    startMonth = 1;
    endMonth = 3;
    fiscalYear = currentYear; // Q4 is in the next calendar year
  }
  
  // Calculate quarter start and end dates
  const startDate = new Date(fiscalYear, startMonth - 1, 1);
  const endDate = new Date(fiscalYear, endMonth, 0); // Last day of end month
  
  // Calculate days remaining in quarter
  const endOfQuarter = new Date(endDate);
  endOfQuarter.setHours(23, 59, 59, 999); // End of the last day
  
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil((endOfQuarter - today) / msPerDay);
  
  return {
    quarter,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    todayDate: formatDate(today),
    fiscalYear,
    daysRemaining: daysRemaining > 0 ? daysRemaining : 0
  };
}


const quarterObj = getCurrentQuarter();


const textEl = document.querySelector('[data-text]');
textEl && quarterObj && (textEl.innerHTML = `
<p>Currently it's the</p>
<h2>${quarterObj.quarter} of the Fiscal Year ${quarterObj.fiscalYear}</h2> 
<p>it starts on <b>${quarterObj.startDate}</b></p> 
<p>and ends on <b>${quarterObj.endDate}</b>.</p>
<br>
<h1 style="color:#FA00FF">${quarterObj.daysRemaining} days</h1>
<p>remaining until end of <br>${quarterObj.quarter}</p>
<br>
<p>Today is the <b>${quarterObj.todayDate}</b></p>
`);