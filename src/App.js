import React, {Component} from 'react';
import './App.css';

/*https://www.youtube.com/watch?v=tiytyGEodl0 */

const MyInput = (props)=>{
  return(
    <input type='text'
    ref={props.inputRef}/>
  )
}

const FuncCustomComponent = (props)=>{
  let inputRef = null;
  const subClicked = (event)=>{
    inputRef.focus();
  }
 
  return(
    <div>   
        <span>My Input</span>
        <MyInput inputRef={(input)=>{
        inputRef= input;
    }}/>
        <input type="submit"
                value="submit"
                onClick={subClicked}/>

    </div>
  )
}

class App  extends Component {
  render (){
    this.handleSubmit = (event)=>{
      console.log('First name is ', this.firstName.value);
      console.log('last name is ', this.lastName.value);
      console.log('Age is ', this.age.value);
    }

    this.inputKeyUp = (target, event)=>{
      if(event && event.keyCode===13){
        switch(target){
          case 'firstName':
              this.lastName.focus();
            break;
          case 'lastName':
            this.age.focus();
            break;
          case 'age':
              this.submit.focus();
            break;
          default:
            break;
        }   
      }
    }

    return (
      <div className="container">
        <FuncCustomComponent/>
        <div><span className="form-label">First Name: </span>
        <input type="text" placeholder="First Name"
        ref= {(input)=>{
          this.firstName = input;
        }}
        onKeyUp={this.inputKeyUp.bind(this,'firstName')}/>
        </div>
        <div><span className="form-label">Last Name: </span>
        <input type="text" placeholder="Last Name"
        ref= {(input)=>{
          this.lastName = input;
        }}
        onKeyUp={this.inputKeyUp.bind(this, 'lastName')}
        /></div>
        <div><span className="form-label">Age: </span><input type="text" placeholder="Age"
        ref= {(input)=>{
          this.age = input;
        }}
        onKeyUp={this.inputKeyUp.bind(this, 'age')}/></div>
        <input type="submit" value="submit" className="submit-btn"
         onClick= {this.handleSubmit}
         ref= {(input)=>{
          this.submit = input;
        }}
        onKeyUp={this.inputKeyUp}/>        
      </div>
    );
  } 
}

export default App;
