import React from 'react';

// let data =[
//     { name : "Tanmay Gujar",
//     avatar_url : "https://avatars0.githubusercontent.com/u/19?v=4",
//     company : "Nitor Infotech"},
//     { name : "Aziz Nagpurwala",
//     avatar_url : "https://avatars2.githubusercontent.com/u/37330246?v=4",
//     company : "Nitor Infotech"},
//     ];

const Card = (props) =>{
return(
<div style={{margin:'1em'}}>
    <img width="75" src={props.avatar_url} />
    <div style={{display:'inline-block',marginLeft:10}}>
        <div style={{fontSize:'1.2em',fontWeight:'bold'}}> {props.name} </div>
        <div> {props.company} </div>
    </div>
</div>
);
};



const CardList = (props) =>{
    return(
        <div>
            {/* <Card name = "Aziz Nagpurwala"
            avatar_url = "https://avatars2.githubusercontent.com/u/37330246?v=4"
            company = "Nitor Infotech"/> */}
            {props.cards.map(card => <Card key={card.id} {...card} />)}   {/* spreadoperator */}
            
        </div>
    );
};

class Form extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
  //      this.clearData =this.clearData.bind(this);        
        //this.onSubmit = this.onSubmit.bind(this);
        this.state = {userName : ''};
    }

    handleSubmit(event){
        var globalThis = this;
        event.preventDefault();
        //console.log('Event submitted',this.userNameInput.value);
        console.log('Event submitted',this.state.userName);
        fetch(`https://api.github.com/users/${this.state.userName}`)
        .then( function(response) {
            return response.json();
          })
        //   .then( function(response) {
        //     setTimeout( function() {
        //       this.setState({
        //       infoStatus: 'loaded'
        //     });
        //     }, 300);
        //     return response.json();
        //   })
          .then( function(data) {
              //debugger;
              globalThis.props.onSubmit(data);
              //globalThis.setState({userName : ''});
              document.getElementById('nametextbox').value = '';
//              clearData();
                //console.log(data.avatar_url);
        });
        //  })
        

        
        // .then(function(data){
        //     console.log(data.avatar_url);
        //    // console.log(response.)
        // })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="nametextbox"
                onChange={(event)=>this.setState({userName:event.target.value})}
                // ref={(input)=>this.userNameInput = input}
                placeholder = "Github username" required />
                <button type="submit">Add Card </button>                
            </form>
        );
    }
}

class App extends React.Component{
   
    constructor(props){
        super(props);
        this.addNewCard=this.addNewCard.bind(this);
        this.state = {
            cards :[
                // { name : "Tanmay Gujar",
                // avatar_url : "https://avatars0.githubusercontent.com/u/19?v=4",
                // company : "Nitor Infotech"},
                // { name : "Aziz Nagpurwala",
                // avatar_url : "https://avatars2.githubusercontent.com/u/37330246?v=4",
                // company : "Nitor Infotech"},
                ]
        };
    }
   
   addNewCard(cardInfo){
       //console.log(cardInfo);
       this.setState(prevState => ({
           cards: prevState.cards.concat(cardInfo)

       }));
   }
    // state = {
    //     cards :[
    //         { name : "Tanmay Gujar",
    //         avatar_url : "https://avatars0.githubusercontent.com/u/19?v=4",
    //         company : "Nitor Infotech"},
    //         { name : "Aziz Nagpurwala",
    //         avatar_url : "https://avatars2.githubusercontent.com/u/37330246?v=4",
    //         company : "Nitor Infotech"},
    //         ]
    // };

    // clearData(){
    //     this.setState({
    //         userName: ''
    //       })
    // }

    render(){
        return(
            <div>
                <Form onSubmit={this.addNewCard}/>
                <br/>
                {/* <CardList cards= {data} /> */}
                <CardList cards= {this.state.cards} />
            </div>
        );
    }
}

export default App;