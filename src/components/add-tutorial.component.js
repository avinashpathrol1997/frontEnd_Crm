import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProv_state = this.onChangeProv_state.bind(this);
    this.onChangeCountry_code = this.onChangeCountry_code.bind(this);
    this.onChangePhone_number = this.onChangePhone_number.bind(this);
    this.onChangeEmail_1 = this.onChangeEmail_1.bind(this);
    this.onChangeEmail_2 = this.onChangeEmail_2.bind(this);
    this.onChangeCustomer_credit_limit = this.onChangeCustomer_credit_limit.bind(this);
    this.onChangeCustomer_accounting_code = this.onChangeCustomer_accounting_code.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      address1: "",
      address2: "",
      city: "",
      prov_state: "",
      country_code: "",
      phone_number: "",
      email_1: "",
      email_2: "",
      customer_credit_limit: "",
      customer_accounting_code: "",
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeAddress1(e) {
    this.setState({
      address1: e.target.value
    });
  }
  onChangeAddress2(e) {
    this.setState({
      address2: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  onChangeProv_state(e) {
    this.setState({
      prov_state: e.target.value
    });
  }
  onChangeCountry_code(e) {
    this.setState({
      country_code: e.target.value
    });
  }
  onChangePhone_number(e) {
    this.setState({
      phone_number: e.target.value
    });
  }
  onChangeEmail_1(e) {
    this.setState({
      email_1: e.target.value
    });
  }
  onChangeEmail_2(e) {
    this.setState({
      email_2: e.target.value
    });
  }
  onChangeCustomer_credit_limit(e) {
    this.setState({
      customer_credit_limit: e.target.value
    });
  }
  onChangeCustomer_accounting_code(e) {
    this.setState({
      customer_accounting_code: e.target.value
    });
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      prov_state: this.state.prov_state,
      country_code: this.state.country_code,
      phone_number: this.state.phone_number,
      email_1: this.state.email_1,
      email_2: this.state.email_2,
      customer_credit_limit: this.state.customer_credit_limit,
      customer_accounting_code: this.state.customer_accounting_code

    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          address1: response.data.address1,
          address2: response.data.address2,
          city: response.data.city,
          country_code: response.data.country_code,
          prov_state : response.data.prov_state,
          phone_number: response.data.phone_number,
          email_1: response.data.email_1,
          email_2: response.data.email_2,
          customer_credit_limit: response.data.customer_credit_limit,
          customer_accounting_code: response.data.customer_accounting_code,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      address1: "",
      address2: "",
      city: "",
      prov_state: "",
      country_code: "",
      phone_number: "",
      email_1: "",
      email_2: "",
      customer_credit_limit: "",
      customer_accounting_code: "",

      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address1">Address1</label>
              <input
                type="text"
                className="form-control"
                id="address1"
                required
                value={this.state.address1}
                onChange={this.onChangeAddress1}
                name="address1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address2">Address2</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                required
                value={this.state.address2}
                onChange={this.onChangeAddress2}
                name="address2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">city</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country_code">country_code</label>
              <input
                type="text"
                className="form-control"
                id="country_code"
                required
                value={this.state.country_code}
                onChange={this.onChangeCountry_code}
                name="country_code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="prov_state">prov_state</label>
              <input
                type="text"
                className="form-control"
                id="prov_state"
                required
                value={this.state.prov_state}
                onChange={this.onChangeProv_state}
                name="prov_state"
              />
            </div>
            <div className="form-group">
            <label htmlFor="phone_number">phone_number</label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              required
              value={this.state.phone_number}
              onChange={this.onChangePhone_number}
              name="phone_number"
            />
          </div>
          <div className="form-group">
          <label htmlFor="email_1">email_1</label>
          <input
            type="text"
            className="form-control"
            id="email_1"
            required
            value={this.state.email_1}
            onChange={this.onChangeEmail_1}
            name="email_1"
          />
        </div>
        <div className="form-group">
        <label htmlFor="email_2">email_2</label>
        <input
          type="text"
          className="form-control"
          id="email_2"
          required
          value={this.state.email_2}
          onChange={this.onChangeEmail_2}
          name="email_2"
        />
      </div>
      <div className="form-group">
      <label htmlFor="customer_credit_limit">customer_credit_limit</label>
      <input
        type="text"
        className="form-control"
        id="customer_credit_limit"
        required
        value={this.state.customer_credit_limit}
        onChange={this.onChangeCustomer_credit_limit}
        name="customer_credit_limit"
      />
    </div>
      <div className="form-group">
      <label htmlFor="customer_accounting_code">customer_accounting_code</label>
      <input
        type="text"
        className="form-control"
        id="customer_accounting_code"
        required
        value={this.state.customer_accounting_code}
        onChange={this.onChangeCustomer_accounting_code}
        name="customer_accounting_code"
      />
    </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
