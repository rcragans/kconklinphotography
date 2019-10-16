import React, {Component} from 'react'

class AboutMe extends Component{
    render(){
        return(
            <div className="aboutMe">
                <h1 className="aboutHeader">About Me</h1>
                <div className="image">
                    <img className="photo" alt=""src=""></img>
                </div>
                <div className="aboutMe">
                        <p className="aboutMeLists"></p>
                </div>
            </div>

        )
    }
}

export default AboutMe