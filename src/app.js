console.log("App.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "DON'T put your life in the hands of a computer",
    options: []
}

function onFormSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        render();
    }
}

function onRemoveAll() {
    app.options = [];
    render();
}

const appRoot = document.getElementById("app");

function render() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options!"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();