import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class UpperForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      password: '', 
      email: '', 
      city: 'Минск',
      checkbox1: false, 
      checkbox2: false, 
      checkbox3: false, 
      textarea: '', 
      send: '',
      reset: '',
    };
    this.OnSubmit = this.OnSubmit.bind(this);
    this.OnChange = this.OnChange.bind(this);
    this.OnChangeCheckbox = this.OnChangeCheckbox.bind(this);
    this.OnClickSend = this.OnClickSend.bind(this);
    this.OnClickReset = this.OnClickReset.bind(this);
  }
  
  OnSubmit(e){
    e.preventDefault();
  }

  OnChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]:value
    });
  }
 
  OnChangeCheckbox(e){
    // const name = e.target.name;
    // const value = e.target.value;
    // this.setState({[name]: !value}); Почему оно так не работает? :(
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
  }
  
  OnClickSend(e){
    let sendInfo = JSON.stringify(this.state)
    console.log(sendInfo);
  }

  OnClickReset(e){
    for (const key in this.state){
      const search = key.search('checkbox');
      // 
      // console.log(search);
      if (search !== -1){
        this.setState({
          [key]: false
        })
        
        console.log(this.state[key]);
      }
      else{
        this.setState({
          [key]: ''
        })
        // console.log(this.state[key]);
      }
    }
  }

  render() {
    const {name, password, email, city, checkbox1, checkbox2, checkbox3, textarea, send, reset} = this.state;

    return (
      <div >
        <form >
          <div className = 'block'>
            <div className = 'inputs'>
              <input name = 'name' placeholder = 'name' value = {name} onChange={this.OnChange}></input>
              <input name = 'password' placeholder = 'password' value = {password} onChange={this.OnChange}></input>
              <input name = 'email' placeholder = 'email' value = {email} onChange={this.OnChange}></input>
            </div>
            <select name = 'city' placeholder = 'city' value = {city} onChange={this.OnChange}>
              <option>Минск</option>
              <option>Брест</option>
              <option>Витебск</option>
              <option>Гомель</option>
              <option>Гродно</option>
              <option>Могилев</option>
            </select>
          </div>
        </form>
        <form>
          <div className = 'block'>
            <div className = 'checkboxes'>
              <div className = 'container'>
                <input name = 'checkbox1' type = 'checkbox' value = {checkbox1}  onChange={this.OnChangeCheckbox}></input>
                <span>Trial</span>
              </div>
              <div className = 'container'>
                <input name = 'checkbox2' type = 'checkbox' value = {checkbox2}  onChange={this.OnChangeCheckbox}></input>
                <span>Subscribe</span>
              </div>
              <div className = 'container'>
                <input name = 'checkbox3' type = 'checkbox' value = {checkbox3}  onChange={this.OnChangeCheckbox}></input>
                <span>Terms and conditions</span>
              </div>
            </div>
            <textarea name = 'textarea' placeholder = 'Any comment...' value={textarea} onChange={this.OnChange}></textarea>
          </div>  
        </form>
        <div className = {'block & buttons'}>
          <button name = 'send' onClick={this.OnClickSend} value = {send}>Send</button> 
          <button name = 'reset' onClick={this.OnClickReset} value = {reset}>Reset</button> 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UpperForm />,  document.getElementById('root'));

export default UpperForm;