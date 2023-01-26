const app = {
  title: "Indecision App",
  subtitle: "this is some jsx",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value.trim();

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderIndecisionApp();
};

const root = ReactDOM.createRoot(document.getElementById("app"));

const removeAll = () => {
  app.options = [];

  renderIndecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "see your options" : "Insert option"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        what should i do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  root.render(template);
};

renderIndecisionApp();
