const { useState } = require("react");

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
