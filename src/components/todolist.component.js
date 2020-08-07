import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import ListItems from "./listitems.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
library.add(faTrash);

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      items: [],
      current: {
        text: "",
        key: "",
      },
    };
  }

  handleInput(e) {
    this.setState({
      current: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  handlerClick(e) {
    e.preventDefault();
    let inputValue = this.state.current;
    let newItem;

    if (inputValue.text != "") {
      this.setState(
        {
          current: {
            text: inputValue.text,
            key: Date.now(),
          },
        },
        () => {
          newItem = this.state.current;
          this.setState({
            items: [...this.state.items, newItem],
            current: {
              text: "",
              key: "",
            },
          });
        }
      );
    }
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="todo-outer p-5">
        <div className="todo-inner">
          <Form className="p-3">
            <Form.Row className="align-items-center">
              <Col>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Enter your task"
                  value={this.state.current.text}
                  onChange={this.handleInput}
                />
              </Col>
              <Col xs="auto">
                <Button
                  type="submit"
                  className="mb-2"
                  onClick={this.handlerClick}
                >
                  Add
                </Button>
              </Col>
            </Form.Row>
            <Form.Row className="align-items-center mb-4">
              <ListItems
                items={this.state.items}
                deleteItem={this.deleteItem}
                setUpdate={this.setUpdate}
              />
            </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default ToDoList;
