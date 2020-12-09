import Message from "./Message";
import Form from "./Form";
import Balance from "./Balance";

// This is basically a middleman component - we don't actually need to data in here
function Layout() {
    return (
        <main>
            <Message />
            <Form />
            <Balance />
        </main>
    )
}

export default Layout