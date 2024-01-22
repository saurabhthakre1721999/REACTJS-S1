import { useState, useMemo, useRef, useEffect } from "react";
import InputView from "../../molecules/InputView/InputView.Component";
import ChipView from "../ChipView/ChipView.Component";
import { AutocompleteContainer, ChipContainer } from "./Autocomplete.Styles";
import DropdownListView from "../DropdownListView/DropdownListView.Component";

const Autocomplete = ({ options, selectedList, onSetSelectedList }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [val, setVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };

    // Add event listener to handle global click events
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onChipDelete = (key) => {
    onSetSelectedList((prevState) =>
      prevState.filter((chip) => chip.key !== key)
    );
    setIsFocused(false);
    inputRef.current.blur();
  };

  const filteredSuggestions = useMemo(() => {
    return options.filter(
      (option) => !selectedList.some((selected) => selected.key === option.key)
    );
  }, [options, selectedList]);

  const handleSuggestionClick = (suggestion) => {
    onSetSelectedList((prevSelectedList) => [...prevSelectedList, suggestion]);
    setVal("");
    setIsFocused(false);
    inputRef.current.blur();
  };

  const renderSelectedChips = () => {
    if (selectedList.length === 0) {
      return null;
    }

    return selectedList.map((item) => (
      <ChipView
        key={item.key}
        {...item}
        onDelete={() => onChipDelete(item.key)}
      />
    ));
  };

  return (
    <AutocompleteContainer ref={autocompleteRef}>
      <ChipContainer>{renderSelectedChips()}</ChipContainer>
      <div style={{ position: "relative" }}>
        <InputView
          myRef={inputRef}
          outline={"none"}
          border={"0"}
          placeholder={"Search hobby"}
          value={val}
          onChange={(name, value) => setVal(value)}
          onFocus={() => setIsFocused(true)}
        />

        <DropdownListView
          isFocused={isFocused}
          data={filteredSuggestions}
          onClick={handleSuggestionClick}
        />
      </div>
    </AutocompleteContainer>
  );
};

export default Autocomplete;
