import currency from "currency.js";

const turnMoney = (number: number) => {
    return String(currency(number, {symbol: "R$", separator: ",", decimal: "."}).format());
}

export default turnMoney;