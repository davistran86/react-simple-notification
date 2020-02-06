import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Notification from "./Notification";
import * as blackIcons from "../assets/BlackIcons";

let globalName = "simple-notification";

let initialContent = {
  title: "",
  description: ""
};

let initialOption = {
  type: null,
  duration: 5000,
  position: "top-right",
  width: "400px",
  bold: false,
  speed: 200,
  backgroundColor: "#fff",
  fontColor: "rgb(37,56,88)",
  iconColor: "none",
  icon: null
};

let topRight = { top: "1rem", right: "1rem" };
let topLeft = { top: "1rem", left: "1rem" };
let bottomRight = { bottom: "1rem", right: "1rem" };
let bottomLeft = { bottom: "1rem", left: "1rem" };

class Index extends React.Component {
  constructor() {
    super();
    this.containerId = null;
    this.childId = null;
    this.speed = 200;
  }

  static open = (_content = initialContent, _option = initialOption) => {
    this.notification = React.createRef();
    const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
    if (!positions.includes(_option.position)) {
      _option.position = "top-right";
    }

    let option = { ...initialOption, ..._option };
    let placement;
    let speed = option.speed;
    this.speed = speed;

    let content =
      typeof _content !== "object"
        ? { title: initialContent.title, description: _content }
        : _content;

    let containerId = `${globalName}-${_option.position}`;
    let childId =
      Math.random()
        .toString(36)
        .substring(7) +
      Math.random()
        .toString(36)
        .substring(7);

    this.containerId = containerId;
    this.childId = childId;

    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.setAttribute("id", containerId);
      switch (_option.position) {
        case "top-left":
          placement = topLeft;
          break;
        case "bottom-left":
          placement = bottomLeft;
          break;
        case "bottom-right":
          placement = bottomRight;
          break;
        default:
          placement = topRight;
          break;
      }
      let containerStyles = {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        ...placement
      };

      Object.assign(container.style, containerStyles);

      document.body.appendChild(container);
    }

    let child = document.createElement("div");
    child.setAttribute("id", childId);
    let childStyles = {
      margin: "0.25rem 0"
    };

    Object.assign(child.style, childStyles);
    container.appendChild(child);
    render(
      <Notification
        ref={this.notification}
        {...{ childId, containerId }}
        {...option}
        {...content}
      />,
      child
    );

    return this.notification;
  };

  static success(_content, _option = initialOption) {
    let bold = {
      iconColor: "#fff",
      backgroundColor: "rgb(0, 135, 90)",
      fontColor: "#fff"
    };

    let boldOptions = _option.bold && bold;

    let content =
      typeof _content !== "object"
        ? { title: "Success", description: _content }
        : _content;

    _option = {
      ..._option,
      icon: blackIcons.Success,
      iconColor: "rgb(54, 179, 126)",
      type: "success"
    };

    return this.open(content, {
      ..._option,
      ...boldOptions
    });
  }

  static error(_content, _option = initialOption) {
    let bold = {
      iconColor: "#fff",
      backgroundColor: "rgb(222, 53, 11)",
      fontColor: "#fff"
    };

    let boldOptions = _option.bold && bold;

    let content =
      typeof _content !== "object"
        ? { title: "Error", description: _content }
        : _content;

    _option = {
      ..._option,
      icon: blackIcons.Error,
      iconColor: "rgb(255, 86, 48)",
      type: "error"
    };

    return this.open(content, {
      ..._option,
      ...boldOptions
    });
  }

  static info(_content, _option = initialOption) {
    let bold = {
      iconColor: "#fff",
      backgroundColor: "rgb(66, 82, 110)",
      fontColor: "#fff"
    };

    let boldOptions = _option.bold && bold;

    let content =
      typeof _content !== "object"
        ? { title: "Info", description: _content }
        : _content;

    _option = {
      ..._option,
      icon: blackIcons.Info,
      iconColor: "rgb(101, 84, 192)",
      type: "info"
    };

    return this.open(content, {
      ..._option,
      ...boldOptions
    });
  }

  static warning(_content, _option = initialOption) {
    let bold = {
      iconColor: initialOption.fontColor,
      backgroundColor: "rgb(255, 196, 0)",
      fontColor: initialOption.fontColor
    };

    let boldOptions = _option.bold && bold;

    let content =
      typeof _content !== "object"
        ? { title: "Warning", description: _content }
        : _content;

    _option = {
      ..._option,
      icon: blackIcons.Warning,
      iconColor: "rgb(255, 171, 0)",
      type: "warning"
    };

    return this.open(content, {
      ..._option,
      ...boldOptions
    });
  }

  static close = node => {
    return node && node.current.onClose();
  };

  static closeAll = () => {
    let _notificationContainers = document.querySelectorAll(
      `[id^=${globalName}]`
    );
    let notificationContainers = Array.from(_notificationContainers);
    notificationContainers.forEach(container => {
      const regex = /\w.*-(\w.*)/gm;
      let direction = regex.exec(container.id)[1];
      let allChild = Array.from(container.childNodes);
      allChild.forEach(
        child =>
          (child.firstChild.firstChild.style.animationName = `slide-out-${direction}`)
      );
      setTimeout(() => {
        allChild.map(item => unmountComponentAtNode(item));
        document.body.removeChild(container);
      }, this.speed);
    });
  };
}

export default Index;
