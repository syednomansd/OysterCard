/*
 * OysterCard.class.js
 *
 * Class to manage the Oyster Card
 *
 * @version    0.1.0
 * @author     Guilherme Borges Bastos
 * @copyright  Copyright 2017 Guilherme Borges Bastos
 * @date       15/11/2017
*/

"use strict";

// const variables
const BUS_COST = 1.8,
      MAX_COST = 3.2,
      COST_ONLY_ZONE_ONE = 2.5,
      COST_ONE_ZONE_NOT_INCLUDING_ZONE_ONE = 2.0,
      COST_TWO_ZONES_INCLUDING_ZONE_ONE = 3.0,
      COST_TWO_ZONES_EXCLUDING_ZONE_ONE = 2.25;

const STATIONS = {
    Holborn: [1],
    EarlsCourt: [1, 2],
    Hammersmith: [2],
    Wimbledon: [3]
};


class OysterCard {

    constructor (credit = 0) {
        this.credit = credit;
        this.fare = 0;
        this.points = [];
    }

    /**
     * Sets Credit in the Card
     * @param  float  amount
    */
    setCredit(amount) {
        if (typeof(amount) === 'number') {
            this.credit += amount;
        } else {
            return 0;
        }
        return this.credit;
    }

    /**
     * Reads Credit from the Card
    */
    getCredit() {
        return this.credit;
    }
    
    /*
     * Sets Debit in the Card
    */
    setDebit() {
        (this.credit >= this.fare ? this.credit -= this.fare : process.exit(console.log('Not enough credit!')));
    }

}

Object.defineProperty(OysterCard, 'STATIONS', {
  value: STATIONS,
  writable: false // makes the property read-only
});

module.exports = OysterCard;