console.log("App.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "DON'T put your life in the hands of a computer",
    options: ["one", "two"]
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options!"}</p>
        <ol>
            <li>Item one</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

function reset() {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();