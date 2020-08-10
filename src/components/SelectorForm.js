import React from "react";

class SelectorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "priority-value":'',
      "types-value": '',
      "status-value": '',
      priority: [
        { name: "Low", value: 1, class: "success" },
        { name: "Normal", value: 2, class: "warning" },
        { name: "Highly", value: 3, class: "danger" },
      ],
      type: [
        { name: "Feature", value: 1, class: "primary" },
        { name: "Bug", value: 2, class: "warning" },
        { name: "Story", value: 3, class: "info" },
      ],
      status: [
        { name: "Open", value: 1, class: "primary" },
        { name: "Inprogress", value: 2, class: "warning" },
        { name: "Done", value: 3, class: "info" },
      ],
    };
  }

  componentDidUpdate() {
    const data = this.state[this.props.data].filter(
      (el) => el.value == this.state[this.props.data + "-value"])[0];

      if(data !== undefined){
        this.props.updateData({ value: data.name, name: this.props.data })
      }
  }

  SelectorHandler = (event) => {
    this.setState({ [this.props.data + "-value"]: event.target.value });
  };

  render() {
    const Selector = this.state[this.props.data].map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ));
    return (
      <div id="selector">
        <label className="my-1 mr-2" htmlFor="priority">
          Test
        </label>
        <select
          className="custom-select my-1 mr-sm-1"
          id="priority"
          value={this.state[this.props.data + "-value"]}
          onChange={this.SelectorHandler}
        >
          {Selector}
        </select>
      </div>
    );
  }
}

export default SelectorForm;
