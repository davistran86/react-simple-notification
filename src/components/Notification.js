import React from "react";
import { unmountComponentAtNode } from "react-dom";
import * as blackIcons from "../assets/BlackIcons";
import {
  Global,
  Wrapper,
  IconWrapper,
  ContentWrapper,
  Title,
  MainContent,
  BlankSpace,
  CloseButton
} from "./Notification.styles";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.positionDirection = props.position.includes("left") ? "left" : "right";
    this.state = {
      animationName: `slide-in-${this.positionDirection}`
    };
  }

  onClose = () => {
    this.setState({
      animationName: `slide-out-${this.positionDirection}`
    });

    setTimeout(() => {
      let child = document.getElementById(this.props.childId);
      let container = document.getElementById(this.props.containerId);
      container.removeChild(child);
      unmountComponentAtNode(child);
      if (container.childElementCount === 0) {
        document.body.removeChild(container);
      }
    }, this.props.speed);
  };

  componentDidMount() {
    if (this.props.duration !== 0) {
      this.timer = setTimeout(() => {
        this.onClose();
      }, this.props.duration);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    let width = this.props.width;
    let bold = this.props.bold;
    let backgroundColor = this.props.backgroundColor;
    let fontColor = this.props.fontColor;
    let icon = this.props.icon;
    let animationName = this.state.animationName;
    let speed = this.props.speed;
    let type = this.props.type;
    let iconColor = this.props.iconColor;

    return (
      <Global>
        <Wrapper
          {...{
            animationName,
            speed,
            width,
            backgroundColor,
            fontColor
          }}
        >
          {icon && (
            <IconWrapper {...{ bold, type, iconColor }}>{icon}</IconWrapper>
          )}
          <ContentWrapper>
            {this.props.title && <Title>{this.props.title}</Title>}
            {this.props.description && this.props.title && <BlankSpace />}
            {this.props.description && (
              <MainContent>{this.props.description}</MainContent>
            )}
          </ContentWrapper>

          <CloseButton {...{ bold, fontColor, type }} onClick={this.onClose}>
            {blackIcons.Close}
          </CloseButton>
        </Wrapper>
      </Global>
    );
  }
}

export default Notification;
