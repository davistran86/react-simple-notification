import styled from "styled-components";

export const Global = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export const Wrapper = styled.div`
  opacity: 0;
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  position: relative;
  box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px,
    rgba(9, 30, 66, 0.3) 0px 8px 16px -8px;
  color: ${props => props.fontColor};
  display: flex;
  padding: 1rem;
  animation: ${props => props.animationName} ${props => props.speed}ms linear;
  animation-fill-mode: forwards;
  transform: translate3d(0, 0, 0);

  @keyframes slide-in-left {
    0% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-out-left {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes slide-in-right {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slide-out-right {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
`;

export const IconWrapper = styled.div`
  flex: 0 0 auto;
  width: 1.2rem;
  height: 1.5rem;
  border: none;
  align-self: flex-start;
  margin-right: 1rem;
  svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.iconColor};
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 1 0;
  height: 100%;
  overflow: hidden; /* Must use to force the content not go outside */
  margin-right: 1rem;
`;

export const Title = styled.span`
  overflow: hidden;
  display: block; /* Must use in order for text-overflow: ellipsis working */
  font-weight: 600;
  height: 1.5rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MainContent = styled.div`
  line-height: 1.5rem;
  flex: 1 1 100%;
`;

export const BlankSpace = styled.div`
  height: 0.5rem;
`;

export const CloseButton = styled.button`
  flex: 0 0 auto;
  width: 0.6rem;
  height: 0.6rem;
  border: none;
  background: none;
  align-self: flex-start;
  height: 1.5rem;
  cursor: pointer;
  :active,
  :focus {
    outline: none;
  }
  svg {
    fill: ${props => props.fontColor};
  }
`;
