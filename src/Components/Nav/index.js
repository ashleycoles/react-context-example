import UserContext from "../../UserContext";

function Nav() {
    return (
        <UserContext.Consumer>
            {({user}) =>
                <nav>
                    <div>Welcome back {user}</div>
                </nav>
            }
        </UserContext.Consumer>
    )
}

export default Nav