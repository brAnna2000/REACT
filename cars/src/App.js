import './App.css';
import React from 'react';
import Inputs from './Inputs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand: '',
      year: '',
      country: '',
      used: false,
      damage: false,
      items: [],
    }
  }
  OnSubmit=(e)=>{
    console.log(e.target.value);
    e.preventDefault();
  }
  ChangeApp=(e)=>{ 
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'used' || name === 'damage'){
      const name = e.target.name;
      this.setState({
      [name]: !this.state[name]
      });
    }
    else{
      this.setState({
        [name]:value
      });
    }
  }
  OnClickButton=(e)=>{ 
    // console.log('h');
    // const arr=[];
    // const trItems = numbers.map((number) =>
    //   <li>{number}</li>
    // );
    // for (const key in this.state){
    //   <td>{this.state[key]}</td>;
      
    // }
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      brand: this.state.brand,
      year: this.state.year,
      country: this.state.country,
      used: this.state.used,
      damage: this.state.damage,
    });

    this.setState({items});
  }

  render(){
    return (
      <div>
        <Inputs onChange={this.ChangeApp} onSubmit={this.OnSubmit} onClick={this.OnClickButton} items={this.state.items} />
      </div>
    );
  }
}
export default App;