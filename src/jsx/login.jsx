var Login = React.createClass({ 
    
    getInitialState: function() { return { userName: "test", password: "pass" } }, 
    
    handleClick: function(e) {
        alert(':' + this.state.userName + " - " + this.state.password);
    }, 
    
    handleUserNameChange: function(e) { this.setState({userName: e.target.value}); }, 
    handlePasswordChange: function(e) { this.setState({password: e.target.value}); }, 
    
    render: function () { return ( 
        <form>
            <h2>Login</h2>
            <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
            <input type="submit" onClick={this.handleClick} value="Login" className="btn btn-default" />
        </form> 
    );}
    
});

if(document.getElementById('loginComponent') != null) ReactDOM.render(<Login />,document.getElementById('loginComponent'));