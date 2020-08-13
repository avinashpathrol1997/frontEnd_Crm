import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);
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
    
    
    

    this.state = {
      currentTutorial: {
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
        customer_accounting_code:"",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      }
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }
  onChangeAddress1(e) {
    const address1 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        address1: address1
      }
    }));
  }

  onChangeAddress2(e) {
    const address2 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        address2: address2    
        }
    }));
  }
  onChangeCity(e) {
    const city = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        city: city    
        }
    }));
  }
  onChangeProv_state(e) {
    const prov_state = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        prov_state: prov_state    
        }
    }));
  }
  onChangeCountry_code(e) {
    const country_code = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        country_code: country_code    
        }
    }));
  }
  onChangePhone_number(e) {
    const phone_number = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        phone_number: phone_number    
        }
    }));
  }
  onChangeEmail_1(e) {
    const email_1 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        email_1: email_1    
        }
    }));
  }
  onChangeEmail_2(e) {
    const email_2 = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        email_2: email_2    
        }
    }));
  }
  onChangeCustomer_credit_limit(e) {
    const customer_credit_limit = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        customer_credit_limit: customer_credit_limit    
        }
    }));
  }
  onChangeCustomer_accounting_code(e) {
    const customer_accounting_code = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        customer_accounting_code: customer_accounting_code    
        }
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      address1: this.state.currentTutorial.address1,
      address2: this.state.currentTutorial.address2,
      city: this.state.currentTutorial.city,
      prov_state: this.state.currentTutorial.prov_state,
      country_code: this.state.currentTutorial.country_code,
      phone_number: this.state.currentTutorial.phone_number,
      email_1: this.state.currentTutorial.email_1,
      email_2: this.state.currentTutorial.email_2,
      customer_credit_limit: this.state.currentTutorial.customer_credit_limit,
      customer_accounting_code: this.state.currentTutorial.customer_accounting_code,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Customers</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address1">Address1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  value={currentTutorial.address1}
                  onChange={this.onChangeAddress1}
                />
              </div>
              <div className="form-group">
              <label htmlFor="address2">Address2</label>
              <input
                type="text"
                className="form-control"
                id="address2"
                value={currentTutorial.address2}
                onChange={this.onChangeAddress2}
              />
            </div>
            <div className="form-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={currentTutorial.city}
              onChange={this.onChangeCity}
            />
          </div>
          <div className="form-group">
          <label htmlFor="prov_state">prov_state</label>
          <input
            type="text"
            className="form-control"
            id="prov_state"
            value={currentTutorial.prov_state}
            onChange={this.onChangeProv_state}
          />
        </div>
        <div className="form-group">
        <label htmlFor="country_code">country_ccode</label>
        <input
          type="text"
          className="form-control"
          id="country_code"
          value={currentTutorial.country_code}
          onChange={this.onChangeCountry_code}
        />
      </div>
      <div className="form-group">
      <label htmlFor="phone_number">phone_number</label>
      <input
        type="text"
        className="form-control"
        id="phone_number"
        value={currentTutorial.phone_number}
        onChange={this.onChangePhone_number}
      />
    </div>
    <div className="form-group">
    <label htmlFor="email_1">email_1</label>
    <input
      type="text"
      className="form-control"
      id="email_1"
      value={currentTutorial.email_1}
      onChange={this.onChangeEmail_1}
    />
  </div>
  <div className="form-group">
  <label htmlFor="email_2">email_2</label>
  <input
    type="text"
    className="form-control"
    id="email_2"
    value={currentTutorial.email_2}
    onChange={this.onChangeEmail_2}
  />
</div>
<div className="form-group">
<label htmlFor="customer_credit_limit">customer_credit_limit</label>
<input
  type="text"
  className="form-control"
  id="customer_credit_limit"
  value={currentTutorial.customer_credit_limit}
  onChange={this.onChangeCustomer_credit_limit}
/>
</div>
<div className="form-group">
<label htmlFor="customer_accounting_code">customer_accounting_code</label>
<input
  type="text"
  className="form-control"
  id="customer_accounting_code"
  value={currentTutorial.customer_accounting_code}
  onChange={this.onChangeCustomer_accounting_code}
/>
</div>

          <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
