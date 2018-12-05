let visible = false;

function onVisibilityToggle() {
  visible = !visible;
  render();
}

function toggledContent() {
    return (
      <div>
        <p>Here is a thing that will disappear!</p>
      </div>
    );
}

function render() {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onVisibilityToggle}>{visible ? "Hide Details" : "Show Details"}</button>
      {visible && toggledContent()}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
}

render();