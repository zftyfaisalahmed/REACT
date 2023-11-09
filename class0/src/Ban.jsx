import React, { Component } from 'react'

export default class Ban extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
  render() {

    const { cardExpire, cardNumber, cardType, currency, iban } = this.props.Bank

    return (
        <div>
            <details>
                <summary>Details</summary>
                    <div className='lead'>
                        <p><b>Card Expire date :</b>{cardExpire}</p>
                        <p><b>Card Number :</b>{cardNumber}</p>
                        <p><b>Card Type :</b>{cardType}</p>
                        <p><b>Currency :</b>{currency}</p>
                        <p><b>Iban :</b>{iban}</p>
                    </div>
            </details>
        </div>
    )
  }
}
