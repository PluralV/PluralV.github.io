import React from 'react';
import {useState} from 'react';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: props.currentPage,
            buttonsClickedStatuses: [false,false,false] //0: welcome page, 1: mems page, 2: clicker page
        }
        this.changeButtonColors = this.changeButtonColors.bind(this);
    }

    changeButtonColors(index){
        let newButtonsClickedStatuses = [false,false,false];
        newButtonsClickedStatuses[index] = true;
        this.setState((prev)=>({
            ...prev,
            buttonsClickedStatuses:newButtonsClickedStatuses
        }));
    }

    render(){
        return(
            <div className = "navbar">
                <NavButton buttonIndex = {0} changeButtonColors={this.changeButtonColors} setCurrentPage={this.props.setCurrentPage}
                    isClicked = {this.state.buttonsClickedStatuses[0]}/>
                <NavButton buttonIndex = {1} changeButtonColors={this.changeButtonColors} setCurrentPage={this.props.setCurrentPage}
                    isClicked = {this.state.buttonsClickedStatuses[1]}/>
                <NavButton buttonIndex = {2} changeButtonColors={this.changeButtonColors} setCurrentPage={this.props.setCurrentPage}
                    isClicked = {this.state.buttonsClickedStatuses[2]}/>
            </div>
        )
    }


}

function NavButton({buttonIndex, changeButtonColors, setCurrentPage, isClicked}){
    const [hovered, setHovered] = useState(false);

    const getProperColorStyle = ()=>{
        if (isClicked) return {backgroundColor:'rgb(56,99,58)', color:'rgb(255,255,255)'};
        else{
            if (hovered) return {backgroundColor:'rgb(81,160,86)', color:'rgb(255,255,255)'}
            else return {backgroundColor:'rgb(111, 199, 117)', color:'rgb(80,80,80)'}
        }
    }
    let buttonText = (()=>{
        if (buttonIndex === 0) return 'Hello!';
        else if (buttonIndex===1) return 'See Memories';
        else if (buttonIndex===2) return 'See Ideas';
    })();

    return (
        <label className = "navbutton"
                onMouseOver = {()=>{
                    setHovered(true);
                }}
                
                onMouseOut = {()=>{
                    setHovered(false);
                }}
                
                onClick = {()=>{
                    changeButtonColors(buttonIndex);
                    setCurrentPage(buttonIndex+1);
                }}

                style = {getProperColorStyle()}>
            {buttonText}
        </label>
    );
}