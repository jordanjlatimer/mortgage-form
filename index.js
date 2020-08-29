let currentModule = 0;
const navigators = [
  {name: "navFor", increment: 1, animations: ["fadeForIn", "fadeForOut"]}, 
  {name: "navBack", increment: -1, animations: ["fadeBackIn", "fadeBackOut"]}
];
const modules = [
  "PRODUCT", 
  "PROP_DESC", 
  "EST_VAL", 
  "DOWN_PMT", 
  "SPEC_HOME", 
  "PROP_ST", 
  "PROP_ZIP", 
  "PROP_PURP",
  "BUY_TIMEFRAME",
  "CRED_GRADE",
  "LOAN_TYPE",
  "BAL_ONE",
  "MTG_ONE_INT",
  "ADD_CASH",
  "FHA_BANK_FORECLOSURE",
  "ANNUAL_VERIFIABLE_INCOME",
  "NUM_MORTGAGE_LATES",
  "VA_STATUS",
  "PERSONAL_INFO"
];

navigators.map((className) => {
  Array.prototype.forEach.call(document.getElementsByClassName(className.name), (element) => {
    element.addEventListener("click", () => {
      const module = currentModule;
      currentModule += className.increment;
      document.getElementById(modules[module]).style.animation = className.animations[1] + " 850ms forwards running";
      document.getElementById(modules[module + className.increment]).style.display = "flex";
      document.getElementById(modules[module + className.increment]).style.animation = className.animations[0] + " 850ms forwards running";
      setTimeout(() => {
        document.getElementById(modules[module]).style.display = "none"
      }, 850);
    });
  });
});