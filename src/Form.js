export const Form = () => {
    return (
        <div className="form">
            <form className="content">
                <div className="text">
                    <h2 className="alr">ALREADY MEMBERS</h2>
                    <h2 className="btn1">Need Help</h2>
                </div>
                <input type="text" placeholder="Enter your name"/>
                <input type="password" placeholder="Enter your password"/>
                <button className="btn2">SIGN IN</button>
            </form>
            <div className="create">
                <h2 className="dont">Don't have an account yet?</h2>
                <h2 className="acc">Create an account</h2>
            </div>
        </div>
        
    )
}