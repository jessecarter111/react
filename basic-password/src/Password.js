import React from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
    this.revertState = this.revertState.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }
  
  revertState() {
    this.setState({
      authorized: ''
    });
    console.log(this.state.authorized)
  }

  render() {
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <p>The password is "swordfish" ;)</p>
        <input type="password" placeholder="Password" />
        <input type="submit"/>
      </form>)
    const revert = (
      <button onClick={this.revertState}>Revert</button>
    )
    const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    let isAuthorized = this.state.authorized 
    ? 'Contact'
    : 'Enter the password'
    return (
      <div id="authorization">
        <h1>{isAuthorized}</h1>
        {this.state.authorized ? contactInfo : login}
        {revert}
      </div>
    );
  }
}

export default Password