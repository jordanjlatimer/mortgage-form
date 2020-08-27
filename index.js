let currentModule = 0;
const modules = ["product", "property", "financial", "info", "other"];
const fields = [
  "PRODUCT", 
  "PROP_DESC", 
  "EST_VAL", 
  "DOWN_PMT", 
  "SPEC_HOME", 
  "PROP_ST", 
  "PROP_ZIP", 
  "PROP_PURP",
  "CRED_GRADE",
  "LOAN_TYPE",
  "BAL_ONE",
  "MTG_ONE_INT",
  "ADD_CASH",
  "FHA_BANK_FORECLOSURE",
  "ANNUAL_VERIFIABLE_INCOME",
  "NUM_MORTGAGE_LATES",
  "FNAME",
  "LNAME",
  "ADDRESS",
  "CITY",
  "STATE",
  "ZIP",
  "PRI_PHON",
  "EMAIL",
  "VA_STATUS",
  "BUY_TIMEFRAME"
]
let data = {}

Array.prototype.forEach.call(document.getElementsByClassName("navFor"), (element) => {
  element.addEventListener("click", () => {
    document.getElementById(modules[currentModule]).style.display = "none";
    document.getElementById(modules[currentModule + 1]).style.display = "flex";
    currentModule += 1;
  })
})

Array.prototype.forEach.call(document.getElementsByClassName("navBack"), (element) => {
  element.addEventListener("click", () => {
    document.getElementById(modules[currentModule]).style.display = "none";
    document.getElementById(modules[currentModule - 1]).style.display = "flex";
    currentModule -= 1;
  })
})

fields.forEach((field) => {
  Array.prototype.forEach.call(document.getElementsByClassName(field), (element) => {
    element.addEventListener("click", () => {
      console.log(element.value);
      data[field] = element.value;
      console.log(data);
    })
    element.addEventListener("input", () => {
      console.log(element.value);
      data[field] = element.value;
      console.log(data);
    })
  })
})

