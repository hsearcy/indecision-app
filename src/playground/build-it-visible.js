let visible = false;

function onVisibilityToggle() {
  visible = visible ? false : true;
  render();
}

function toggledContent() {
  if (visible) {
    return (
      <div>
        Here is a thing that will disappear!
      </div>
    );
  }
  return null;
}

function render() {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onVisibilityToggle}>{visible ? "Hide Details" : "Show Details"}</button>
      {toggledContent()}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
}

render();