function App() {

  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = symbol => {
    setExpression(prev => prev + symbol);
    if (expression(expression.length - 1) == "=") {
      if (/[0-9]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(prev => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression("");
    setAnswer(0);
    // setExpression(prev => prev.split("").slice(0, prev.length-1).join(""))
    // setAnswer(0);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("div", { className: "dis", id: "display" }, /*#__PURE__*/
    React.createElement("input", { type: "text", value: expression, placeholder: "0", disabled: true }), /*#__PURE__*/
    React.createElement("div", { className: "total" }, answer)), /*#__PURE__*/

    React.createElement("div", { onClick: allClear, className: "padButton AC" }, "AC"), /*#__PURE__*/
    React.createElement("div", { onClick: clear, className: "padButton C", id: "clear" }, "C"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("/"), className: "padButton div", id: "divide" }, "/"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("*"), className: "padButton times", id: "multiply" }, "x"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("7"), className: "padButton seven", id: "seven" }, "7"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("8"), className: "padButton eight", id: "eight" }, "8"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("9"), className: "padButton nine", id: "nine" }, "9"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("-"), className: "padButton minus", id: "subtract" }, "-"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("4"), className: "padButton four", id: "four" }, "4"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("5"), className: "padButton five", id: "five" }, "5"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("6"), className: "padButton six", id: "six" }, "6"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("+"), className: "padButton plus", id: "add" }, "+"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("1"), className: "padButton one", id: "one" }, "1"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("2"), className: "padButton two", id: "two" }, "2"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("3"), className: "padButton three", id: "three" }, "3"), /*#__PURE__*/
    React.createElement("div", { onClick: calculate, className: "padButton equal", id: "equals" }, "="), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("0"), className: "padButton zero", id: "zero" }, "0"), /*#__PURE__*/
    React.createElement("div", { onClick: () => display("."), className: "padButton dot", id: "decimal" }, "."))));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));