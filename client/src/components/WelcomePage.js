import React from 'react';



export default class WelcomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentImage:undefined,
            
        }
    }

    render(){
        return(
            <div className='WelcomePage'>
                <div className = 'ImageHolder'>
                    <image></image>
                </div>
            </div>
        );
    }
}