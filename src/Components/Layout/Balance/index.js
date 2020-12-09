import UserContext from "../../../UserContext";

const Balance = ()=>(
    <UserContext.Consumer>
        {({user}) =>
            <h1 className="balance">
                {user} you have £0 in your account :(
            </h1>
        }
    </UserContext.Consumer>
)

export default Balance