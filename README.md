# Simple Notification v2

![](https://i.imgur.com/3yPKbQz.jpg)

## Demo

Please visit: https://davistran86.github.io/react-simple-notification/

## Credit

Icons from www.flaticon.com

Styles and colors are inspired by Ant Design, Atlaskit

## Installation

npm

```
npm i @davistran86/notification
```

yarn

```
yarn add @davistran86/notification
```

## Basic Usage

Simply import the package to your react web app and start using it.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import message from "@davistran86/notification";

const onSuccess = () => {
  message.success("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
};
function App() {
  return (
    <div className="App">
      <button onClick={onSuccess}>Success</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Font settings

To change font settings, make sure font-family and font-size are set in your css by adding css styles to:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
}
```

or

```css
[id^="simple-notification"] {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
    "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
}
```

## Predefined Notification

**Note:** All bellow method can be combined with custom content and option for different type of notification.

| Predefined          | Default                                                                                             | Example                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `message.open()`    | White background, no icon, no title\.                                                               | `message.open("Lorem ipsum dolor sit amet")`                    |
| `message.success()` | White background and predefined icon and title\. Set option `{ bold: true }` for predefined color\. | `message.success("Lorem ipsum dolor sit amet", { bold: true })` |
| `message.error()`   | White background and predefined icon and title\. Set option `{ bold: true }` for predefined color\. | `message.error("Lorem ipsum dolor sit amet", { bold: true })`   |
| `message.warning()` | White background and predefined icon and title\. Set option `{ bold: true }` for predefined color\. | `message.warning("Lorem ipsum dolor sit amet", { bold: true })` |
| `message.info()`    | White background and predefined icon and title\. Set option `{ bold: true }` for predefined color\. | `message.info("Lorem ipsum dolor sit amet", { bold: true })`    |

## Custom Configuration

Notification can be configured as below:

```javascript
message.success(content, option);
```

### Content

```javascript
message.success(content);
```

or

```javascript
message.success({
  title: "...",
  description: "..."
});
```

| Type               | Info                                                               | Example                                                                                   |
| ------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| String / Component | Display content with predefined title or no title based on usage\. | `message.success("Lorem ipsum dolor sit amet, consectetur adipiscing elit")`              |
| Object             | Display content with custome title and content\.                   | `message.success({ title: "Adipiscing at" , description: "Lorem ipsum dolor sit amet" })` |

**Note:** `description` can be a React Component:

```javascript
message.success({
  title: "...",
  description: <SomeComponent />
});
```

### Option

```javascript
message.open(content, {
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
});
```

| Option          | type      | Default                              | Info                                                                                                                                              | Example                                                         |
| --------------- | --------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| width           | string    | 400px                                | **px** is the best choice. Other measurements can be used but not working correctly                                                               | `message.open(content,{ width: "400px" })`                      |
| type            | string    | null when used with `message.open()` | Value: **success, error, warning, info**                                                                                                          | `message.open(content,{ type: "success" })`                     |
| duration        | number    | 5000                                 | Auto close after 5000ms, use **0** to prevent the notification auto close                                                                         | `message.open(content, { duration: 3000 })`                     |
| position        | string    | top-right                            | Value: **top-left, top-right, bottom-left, bottom-right**                                                                                         | `message.open(content, { position: "topLeft" })`                |
| bold            | boolean   | false                                | **type** is required to use with this option\. **false**: white background\. **true**: colored background\.                                       | `message.open(content, { type: "error", bold: true })`          |
| speed           | number    | 200                                  | Animation speed when notification appear or exit\. Should only use between 150 to 500 for smoother effect                                         | `message.open(content, { speed: 200 })`                         |
| backgroundColor | string    | #fff                                 | Any CSS background-color format can be used                                                                                                       | `message.open(content, { backgroundColor: "rgb(0, 135, 90)" })` |
| fontColor       | string    | rgb(37,56,88)                        | Any CSS color format can be used                                                                                                                  | `message.open(content, { fontColor: "#fff" })`                  |
| iconColor       | string    | none                                 | Any CSS color format can be used                                                                                                                  | `message.open(content, { iconColor: "#fff" })`                  |
| icon            | component | null                                 | Any React Component can be used. Should only use by import a svg file as React Component. E.g: `import {ReactComponent as Icon} from './icon.svg` | `message.open(content, { icon: <Icon/> })`                      |

## Closing a Notification

Normally a notification can be closed automatically after a specific duration or by clicking on close button. But there is a `message.close()` method to close the notification in case you need to do so.

**Example:**

Create the notification

```javascript
let notification = message.open("Duis aute irure dolor in repre", {
  duration: 0
});
```

Then close it whenever you want

```javascript
message.close(notification);
```

## Closing all Notification

All notifications can be closed all at once by using `message.closeAll()` method.

**Example:**

Create the notification

```javascript
message.open("Duis aute irure dolor in repre", {
  duration: 0
});
```

Then close all notifications whenever you want

```javascript
message.closeAll();
```
