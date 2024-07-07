/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import { useProduct, _debounce } from "./Hooks/useProduct";

function OptionsBox({ data, input, selectProduct }) {
  const newData = data
    .split(new RegExp(`(${input})`, "gi"))
    .map((node, index) =>
      node.toLowerCase() === input.toLowerCase() ? (
        <b key={index}>{node}</b>
      ) : (
        node
      )
    );

  return <p onClick={() => selectProduct(data)}>{newData}</p>;
}

export default function SearchBar() {
  const [inputVal, setInputVal] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState("");
  const [data] = useProduct(query);
  const [suggestions, setSuggestions] = useState(data);

  const debounceing = useCallback(_debounce(getSuggestion, 1000), []);

  function onInputChange(e) {
    setInputVal(e.target.value);
    debounceing(e.target.value);
  }

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  function getSuggestion(inputVal) {
    setQuery(inputVal);
  }

  function onSelectProduct(option) {
    const check = suggestions.find((item) => item.title === option);
    setSelectedProduct(check);
    setInputVal(option);
    setSuggestions([]);
  }

  const optionsData = suggestions?.map((item) => item.title);

  return (
    <div
      className="parent"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <input value={inputVal} onChange={onInputChange} />
        <div>
          {inputVal &&
            optionsData.map((option, index) => {
              return (
                <OptionsBox
                  key={index}
                  data={option}
                  input={inputVal}
                  selectProduct={onSelectProduct}
                />
              );
            })}
        </div>
      </div>
      {selectedProduct && <div>{selectedProduct.title}</div>}
    </div>
  );
}
