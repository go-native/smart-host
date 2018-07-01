import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SmartForm.css';

class SmartForm extends Component {
  constructor(props) {
    super(props);
    this.handlePremium = this.handlePremium.bind(this);
    this.handleEconomy = this.handleEconomy.bind(this);
  }

  handlePremium(event) {
    this.premium = parseInt(event.target.value || 0);
    this.props.onChange({premium: this.premium, economy: this.economy});
  }

  handleEconomy(event) {
    this.economy = parseInt(event.target.value || 0);
    this.props.onChange({premium: this.premium, economy: this.economy});
  }

  render() {
    return (
      <div className="container">
        <div className="smart-form">
        <h2>Smart Host</h2>
        <div className="form-group">
          <label>Free premium rooms</label>
          <input type="number" min="0" className="form-control" onChange={this.handlePremium} />
        </div>
        <div className="form-group">
          <label>Free economy rooms</label>
          <input type="number" min="0" className="form-control" onChange={this.handleEconomy} />
        </div>
        <b>Usage Premium: {this.props.occupiedPremium} (EUR {this.props.totalPriceForPremium})</b>
        <br />
        <b>Usage Economy: {this.props.occupiedEconomy} (EUR {this.props.totalPriceForEconomy})</b>
        </div>
      </div>
    );
  }
}

SmartForm.propType = {
  onChange: PropTypes.func.isRequired
}

export default SmartForm;
