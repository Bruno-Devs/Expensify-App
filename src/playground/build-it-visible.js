class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      visible: false,
    };
  }

  onToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onToggle}>
          {this.state.visible ? "Hide content" : "show content"}
        </button>
        {this.state.visible ? <p>display some paragraph content</p> : ""}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Toggle />);
