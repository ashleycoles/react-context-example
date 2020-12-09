import UserContext from "../../../UserContext";

const Message = () => (
    <UserContext.Consumer>
        {({user}) =>
            <div className="message">
                Message for {user}
            </div>
        }
    </UserContext.Consumer>

)

export default Message