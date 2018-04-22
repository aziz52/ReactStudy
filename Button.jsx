import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    
    //old example for component counter prog
    constructor(props){
        super(props);
        //this.state = {counter : 9}
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick ()  {
        //first way
        // this.setState({
        //             counter : this.state.counter + 1
        //         })
        
        //second way
        // this.setState((prevState)=>({
        //     counter: prevState.counter + 1
        // }));
        this.props.onClickFunction(this.props.incrementValue);

    }
    
 
 render(){
        return(
            <div>
                <button onClick={this.handleClick}> +{this.props.incrementValue} </button>  
                {/* <button onClick={this.props.onClickFunction}> +1 </button> */}
            </div>
        ); 
    };
}
const Result = (props) =>{
    return(
        <div> Result =  {props.counter} </div>
    );
};

class Reuse extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {counter : 0}
        this.incrementCounter=this.incrementCounter.bind(this);
    }
    
    incrementCounter(incrementValue){
        this.setState((prevState)=>({
                    counter: prevState.counter + incrementValue
                }));
    }

    render(){
        return(
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}
export default Reuse;