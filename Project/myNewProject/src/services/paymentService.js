//import { AsyncStorage } from 'react-native';
export default class PaymentService {

    constructor () {
        this.opalCards = {
            "Work": {
                balance: 50,
                topUpHistory: [
                    {
                        date: new Date(),
                        balance: 50,
                        amount: 10
                    }
                ],
                tapOffHistory: [
                    {
                        date: new Date(),
                        start: "Central",
                        destination: "Randwick",
                        amount: 2.32,
                        balance: 42.30
                    }
                ]
            },
            "Play": {
                balance: 50,
                topUpHistory: [
                    {
                        date: new Date(),
                        balance: 50,
                        amount: 10
                    }
                ],
                tapOffHistory: [
                    {
                        date: new Date(),
                        start: "Central",
                        destination: "Randwick",
                        amount: 2.32,
                        balance: 42.30
                    }
                ]
            },
            "Uni": {
                balance: 50,
                topUpHistory: [
                    {
                        date: new Date(),
                        balance: 50,
                        amount: 10
                    }
                ],
                tapOffHistory: [
                    {
                        date: new Date(),
                        start: "Central",
                        destination: "Randwick",
                        amount: 2.32,
                        balance: 42.30
                    }
                ]
            }
        };

        //var history = await AsyncStorage.getItem('topUpHistory');
    }

    getOpalCards() {
        return Object.keys(this.opalCards);
    }

    addOpalCard(name) {
        this.opalCards[name] = {
            balance: 0,
            topUpHistory: [],
            tapOffHistory: []
        };
    }
    
    topUp(card, amount) {
        this.opalCards[card].topUpHistory.push({
            date: new Date(),
            balance: this.opalCards[card].balance - amount,
            amount: amount
        });
    }
    
    tapOff(card, amount) {
        this.opalCards[card].topUpHistory.push({
            date: new Date(),
            start: "Central",
            destination: "Randwick",
            amount: amount,
            balance: this.opalCards[card].balance - amount
        });
    }
    
}