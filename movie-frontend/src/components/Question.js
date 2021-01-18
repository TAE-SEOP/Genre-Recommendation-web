import React from 'react';


class Question extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            firstAns : 0,
            secondfirstAns : 0,
            thirdAns : 0,
            fourthAns : 0,
        }
    }
    onChange = (e)=> {
        this.setState({firstAns : e.target.value});
        console.log('First Answer', this.state.firstAns);
    };

    render(){
        return(
        <>
        </>
        );
    }
}

export default Question