export const createElement = ({ type, attributes = {}, children = [] }) => {
  let newElement = document.createElement(type);
  Object.entries(attributes).forEach(attr => {
    attr; //?
    let key = attr[0];
    let value = attr[1];

    newElement.attributes[key] = value;

    return attr;
  });
  children.forEach(childElement => {
    childElement;
    if (childElement instanceof Component) {
      newElement.append(childElement.render());
    } else if (typeof childElement === "object") {
      newElement.append(createElement(childElement));
    } else if (typeof childElement === "string") {
      newElement.innerText = childElement;
    }
    return;
  });
  return newElement;
};

export class Component {
  constructor(props) {
    this.type = props.type;
    this.attributes = props.attributes || {};
    this.children = props.children || [];
  }
  render() {
    const { type, attributes, children } = this;
    return createElement({ type, attributes, children });
  }
}
