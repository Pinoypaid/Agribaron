function showTab(tab) {
  const tabs = ['chicken', 'wheat'];
  tabs.forEach(t => {
    document.getElementById(`${t}Tab`).style.display = (t === tab) ? 'block' : 'none';
    document.querySelector(`.tab-button[onclick="showTab('${t}')"]`).classList.toggle('active', t === tab);
  });
}



// Chicken calculator function
function calculateChicken() {
  const chickenInput = document.getElementById("chickens");
  const error = document.getElementById("error");
  const result = document.getElementById("result");

  const feathersOutput = document.getElementById("feathers");
  const diamondsOutput = document.getElementById("diamonds");
  const eggsOutput = document.getElementById("eggs");
  const eggValueOutput = document.getElementById("eggValue");

  let chickens = parseInt(chickenInput.value);

  if (isNaN(chickens) || chickens < 1 || chickens > 6) {
    error.style.display = "block";
    result.style.display = "none";
    error.textContent = "Please enter a valid number of chickens (1 to 6).";
    return;
  }

  error.style.display = "none";
  result.style.display = "block";
  result.style.display = "block";

const totalGoldCost = chickens * 100;
const totalPhpCost = chickens * 1000;

document.getElementById("chickenGoldCost").textContent = totalGoldCost;
document.getElementById("chickenPhpCost").textContent = totalPhpCost.toLocaleString();


  const feathers = chickens;
  const diamonds = feathers * 1.25;
  const eggs = chickens;
  const eggValue = eggs * 5;

  feathersOutput.textContent = feathers;
  diamondsOutput.textContent = diamonds.toFixed(2);
  eggsOutput.textContent = eggs;
  eggValueOutput.textContent = eggValue.toFixed(2);
  
  const diamondValue = diamonds; // 1 diamond = 1 gold coin
  const totalIncomeGold = diamondValue + eggValue;
  const totalIncomePhp = totalIncomeGold * 10;

document.getElementById("chickenDailyGold").textContent = totalIncomeGold.toFixed(2);
document.getElementById("chickenDailyPhp").textContent = totalIncomePhp.toFixed(2);
}




// Wheat calculator function
function calculateWheat() {
  const wheatInput = document.getElementById("wheatAmount");
  const error = document.getElementById("wheatError");
  const result = document.getElementById("wheatResult");

  const wheatStrawOutput = document.getElementById("wheatStraw");
  const wheatGoldOutput = document.getElementById("wheatGold");
  const earWheatOutput = document.getElementById("earWheat");
  const wheatDiamondOutput = document.getElementById("wheatDiamond");

  let wheat = parseInt(wheatInput.value);

  if (isNaN(wheat) || wheat < 1 || wheat > 30) {
    error.style.display = "block";
    result.style.display = "none";
    error.textContent = "Please enter a valid wheat amount (1 to 30).";
    return;
  }

  error.style.display = "none";
  result.style.display = "block";

  const wheatStraw = wheat;
  const wheatGold = wheatStraw * 0.01;
  const earWheat = wheat;
  const wheatDiamond = earWheat * 0.1;

  wheatStrawOutput.textContent = wheatStraw;
  wheatGoldOutput.textContent = wheatGold.toFixed(2);
  earWheatOutput.textContent = earWheat;
  wheatDiamondOutput.textContent = wheatDiamond.toFixed(2);

  const earValue = wheat * 0.1; // diamond → 1 gold coin
  const strawValue = wheat * 0.01;
  const totalIncomeGold = earValue + strawValue;
  const totalIncomePhp = totalIncomeGold * 10;

document.getElementById("wheatDailyGold").textContent = totalIncomeGold.toFixed(2);
document.getElementById("wheatDailyPhp").textContent = totalIncomePhp.toFixed(2);

}
