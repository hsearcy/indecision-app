import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) this.setState(() => ({ options }));
        } catch(e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("cwu");
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => opt !== option)
        }))
    }

    handlePick() {
        const option = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[option]);
    }

    handleAddOption(option) {
        if (!option) {
            return "Please enter a valid value to add an item";
        } else if (this.state.options.indexOf(option) > -1 ) {
            return "This option already exists!";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const subtitle = "Don't put your life in the hands of a computer."
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
