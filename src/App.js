import React from 'react';
import useStyles from './styles.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list : [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({ list, newItem: "" });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }
  render(){
    const classes= this.props;
    return(
      <div>
        <h1 className = "heading" >Todo's List</h1>
        <div className="container"> 
          Add Item......<br/>
          <input 
          className="input-text"
          type="text"
          placeholder="Write a todo"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          />
          <button
          className="add-btn"
          onClick={ () => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          > AddToList</button>
          <div  className="list"> 
            <ul>  
              {this.state.list.map(item =>{
                return(
                  <li key={item.id}>
                    {/* <input
                    type="checkbox"
                    name="idDone"
                    checked={item.isDone}
                    onChange={() => {}}
                    /> */}
                    {item.value}
                    <button  className="btn"
                    onClick={() =>this.deleteItem(item.id)}
                    > Delete </button>
                  </li>
                );
              }
                )}
              <li>  
                {/* <input type="checkbox" /> */}
                Record Youtube videos
                <button className="btn"> Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}


export default ((useStyles),(App));
