import React from 'react'
import UserContext from "../../../UserContext";

class Form extends React.Component {

    handleChange = (e, changeName) => {
        let newName = e.target.value
        changeName(newName)
    }

    render(){
        return (
            <UserContext.Consumer>
                {({user, changeName}) =>
                    <form onChange={(e) => this.handleChange(e, changeName)}>
                        <input type="text" name="firstName" />
                    </form>
                }
            </UserContext.Consumer>
        )
    }
}

export default Form