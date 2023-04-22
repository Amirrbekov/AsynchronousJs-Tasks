class Currency{
    constructor(firstCurrency,secondCurrency,amount){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = amount;
        this.apikey = "YOUR APIKEY";
        this.url = `https://api.apilayer.com/exchangerates_data/convert?apikey=${this.apikey}`;
    }
    exchange(){

        return new Promise((resolve,reject) => {

            fetch(this.url + "&to=" + this.secondCurrency + "&from=" + this.firstCurrency + "&amount=" + this.amount)
            .then(response => response.json())
            .then(data => {
            const parity = data["result"];
            resolve(parity);
        })
        .catch(err => reject(err));
        });
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
        
    }
}
// this.url + "&to=" + this.secondCurrency + "&from=" + this.firstCurrency + "&amount=" + this.amount