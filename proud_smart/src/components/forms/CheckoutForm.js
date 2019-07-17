import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await Axios.post("http://localhost:3002/payments/charge", {
      //   headers: { "Content-Type": "text/plain" },
      token: token.id
    });
    console.log(response);
    if (response.status === 200) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
