console.log("App.js is running!");

var template = (
    <div>
        <h1>Houston</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Houston Searcy</h1>
        <p>Age: 29</p>
        <p>Location: Georgia</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
