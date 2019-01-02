class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            name: "Houston",
            count: 0
        }
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem("count"));
            if (!isNaN(count)) this.setState(() => ({ count }));
        } catch(e) {
            //do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            localStorage.setItem("count", this.state.count)
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState({ count: 0 }); //dont do this, it can lead to async issues
    }

    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
