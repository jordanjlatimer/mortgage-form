let curModNum = 0;
const navs = [
  {name: "navFor", inc: 1, anims: ["fadeForIn", "fadeForOut"]}, 
  {name: "navBack", inc: -1, anims: ["fadeBackIn", "fadeBackOut"]}
];
const mods = [
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

navs.map((className) => {
  Array.prototype.forEach.call(document.getElementsByClassName(className.name), (element) => {
    element.addEventListener("click", () => {
      const modNum = curModNum;
      curModNum += className.inc;
      let curMod = document.getElementById(mods[modNum])
      curMod.style.animation = className.anims[1] + " 850ms forwards running";
      let newMod = document.getElementById(mods[modNum + className.inc])
      newMod.style.display = "flex";
      newMod.style.animation = className.anims[0] + " 850ms forwards running";
      setTimeout(() => {
        curMod.style.display = "none"
      }, 850);
    });
  });
});

Array.prototype.forEach.call(document.querySelectorAll("label > span"), (element) => {
  element.addEventListener("click", () => {
    const modNum = curModNum;
    curModNum += 1;
    let curMod = document.getElementById(mods[modNum])
    let newMod = document.getElementById(mods[modNum + 1])
    curMod.style.animation = "fadeForOut 850ms forwards running";
    curMod.querySelector(".navFor").style.visibility = "visible";
    curMod.querySelector(".navFor").disabled = false;
    newMod.style.display = "flex";
    newMod.style.animation = "fadeForIn 850ms forwards running";
    setTimeout(() => {
      curMod.style.display = "none";
    }, 850);
  }, true)
})

Array.prototype.forEach.call(document.getElementsByTagName("input"), (element) => {
  if (element.type.toLowerCase() !== "range"){
    element.addEventListener("input", () => {
      element.parentNode.parentNode.querySelector(".navFor").style.visibility = "visible";
      element.parentNode.parentNode.querySelector(".navFor").disabled = false;
    });
    return;
  };
  element.addEventListener("input", () => {
    element.parentNode.parentNode.querySelector(".navFor").style.visibility = "visible";
    element.parentNode.parentNode.querySelector(".navFor").disabled = false;
    if (["DOWN_PMT", "MTG_ONE_INT"].includes(element.name)){
      element.parentNode.getElementsByTagName("h3")[0].innerHTML = parseFloat(event.target.value).toFixed(2).toLocaleString() + "%";
    }
    else{
      element.parentNode.getElementsByTagName("h3")[0].innerHTML = "$" + parseInt(event.target.value).toLocaleString();
    }
  });
});

Array.prototype.forEach.call(document.getElementsByTagName("select"), (element) => {
  element.addEventListener("input", () => {
    element.parentNode.parentNode.querySelector(".navFor").style.visibility = "visible";
    element.parentNode.parentNode.querySelector(".navFor").disabled = false;
  });
});