
var HelloSweden = React.createClass({ 
    render: function () {return ( 
        <div>
            <h2>HELLO SWEDEN!!</h2>
            <h3>{this.props.data}</h3>
        </div> 
    );}});

ReactDOM.render(<HelloSweden data="baba" />,document.getElementById('hello'));