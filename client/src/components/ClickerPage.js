import React from 'react';

export default class ClickerPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser:props.currentUser
        }
    }

    render(){
        return(
            <div>
                umm something here
            </div>
        );
    }

}

class DateIdeaEntry extends React.Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}