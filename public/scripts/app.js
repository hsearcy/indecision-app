"use strict";

console.log("App.js is running!");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Houston"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Houston Searcy"
    ),
    React.createElement(
        "p",
        null,
        "Age: 29"
    ),
    React.createElement(
        "p",
        null,
        "Location: Georgia"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
