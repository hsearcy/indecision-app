console.log("App.js is running!");

const appRoot = document.getElementById("app");

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

function listOptions() {
    return app.options.map((option) => {
        return <li key={option}>{option}</li>
    })
}

function onMakeDecision() {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

function render() {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options!"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {listOptions()}
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