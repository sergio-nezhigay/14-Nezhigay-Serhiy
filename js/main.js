const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #14 </h1>\n";
let users = [
  {
    index: 0,
    isActive: true,
    balance: "$2,226.60",
    name: "Eugenia Sawyer",
    gender: "female",
    phone: "+1 (840) 583-3207",
    address: "949 John Street, Rose, Puerto Rico, 1857",
  },
  {
    index: 1,
    isActive: true,
    balance: "$2,613.77",
    name: "Pauline Gallegos",
    gender: "female",
    phone: "+1 (985) 593-3328",
    address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
  },
  {
    index: 2,
    isActive: false,
    balance: "$3,976.41",
    name: "Middleton Chaney",
    gender: "male",
    phone: "+1 (995) 591-2478",
    address: "807 Fleet Walk, Brutus, Arkansas, 9783",
  },
  {
    index: 3,
    isActive: true,
    balance: "$1,934.58",
    name: "Burns Poole",
    gender: "male",
    phone: "+1 (885) 559-3422",
    address: "730 Seba Avenue, Osage, Alabama, 6290",
  },
  {
    index: 4,
    isActive: true,
    balance: "$3,261.65",
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
    address: "120 Scholes Street, Kirk, Michigan, 1018",
  },
  {
    index: 5,
    isActive: false,
    balance: "$1,790.56",
    name: "Suzette Lewis",
    gender: "female",
    phone: "+1 (837) 586-3283",
    address: "314 Dunne Place, Bawcomville, Guam, 9053",
  },
];

// Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.
// І знайти суму всіх балансів користувачів

const toNumber = (string) => Number(string.replace("$", "").replace(",", ""));
const normalizeNumber = (number) =>
  number.toLocaleString("en-US", { style: "currency", currency: "USD" });

const richUsers = users
  .filter(({ balance }) => toNumber(balance) > 2000)
  .map(({ phone }) => phone);
console.log("🚀 ~ file: main.js:66 ~ richUsers:", richUsers);

const totalBalances = normalizeNumber(
  users.reduce((acc, current) => {
    acc += toNumber(current.balance);
    return acc;
  }, 0)
);
console.log("🚀 ~ file: main.js:66 ~ totalBalances:", totalBalances);

resultEl.insertAdjacentHTML("beforeend", richUsers);
resultEl.insertAdjacentHTML("beforeend", "<br>");
resultEl.insertAdjacentHTML("beforeend", totalBalances);
