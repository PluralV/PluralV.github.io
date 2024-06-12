import React from 'react';
import axios from 'axios';


export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passwordAttempt:"",
            errorMessage:"",
            buttonClr:"rgb(255,255,255)"
        }

    }

    render(){
        const white = 'rgb(255,255,255)';
        const hoverClr = 'rgb(200,255,200)';
        return(
            <div className = 'LoginPage'>
                <div><image></image></div>
                <label className = 'LoginLabel'>enter your secret password...</label>
                <input className = 'LoginInput' type="password" name="password" 
                onChange = {(e)=>{
                    this.setState((prev)=>{
                        return {...prev,passwordAttempt:e.target.value};
                    });
                }}></input>
                <button className = 'LoginButton' style = {{backgroundColor:this.state.buttonClr}}
                    onMouseOver = {
                        ()=>{
                            this.setState((prev)=>({...prev,buttonClr:hoverClr}));
                        }
                    }
                    onMouseOut = {
                        ()=>{
                            this.setState((prev)=>({...prev,buttonClr:white}));
                        }
                    }
                    onMouseDown={()=>{
                        this.setState((prev)=>({...prev,buttonClr:'rgb(170,217,170)'}))
                    }}
                    onClick = {()=>{
                        let att = this.state.passwordAttempt;
                        let num = 1;
                        for (let i = 0; i<att.length; i++){
                            num = num*att.charCodeAt(i)+num;
                        }
                        num = Math.exp((num%5),31)%300;
                        if (num === 20.085536923187668) this.props.authorize('Renee');//current password:#1inmyheart
                        else this.setState((prev)=>({...prev,errorMessage:"Oops, wrong password!"}));
                    }}>
                        let's go!
                </button>
                <label className = 'LoginErrorLabel'>{this.state.errorMessage}</label>
            </div>
        );
    }
}