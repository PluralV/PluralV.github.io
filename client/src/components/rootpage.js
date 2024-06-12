import React from 'react';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import MemoriesPage from './MemoriesPage';
import ClickerPage from './ClickerPage';
import NavBar from './NavBar';

export default class AnniSite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage:0,
            currentUser:undefined
        }
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.authorize = this.authorize.bind(this);
    }

    setCurrentPage(num){
        this.setState((prev)=>({
            ...prev,
            currentPage:num
        }));
    }

    authorize(user){
        this.setState({currentPage:1,currentUser:user});
    }

    render(){
        let pageElement;
        if (this.state.currentUser===undefined) return <LoginPage authorize = {this.authorize} setCurrentPage = {this.setCurrentPage}/>;
        switch(this.state.currentPage){
            case 0: return <LoginPage authorize = {this.authorize} setCurrentPage = {this.setCurrentPage}/>;
            case 1: pageElement= <WelcomePage currentUser = {this.state.currentUser}/>; break; //welcome page
            case 2: pageElement = <MemoriesPage />;break; //memory page
            case 3: pageElement = <ClickerPage currentUser = {this.state.currentUser}/>;break; //clicker game page
        }

        return (<div className = "rootpage">
            <div className = "navbar"><h1></h1><h1>6.22.24</h1></div>
            {pageElement}
        </div>);
    }
}