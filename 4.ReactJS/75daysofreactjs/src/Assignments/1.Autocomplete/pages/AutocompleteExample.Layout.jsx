import { useState } from "react";
import Autocomplete from "../components/Organisms/Autocomplete/Autocomplete.Component";

const AutocompleteExample = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [options] = useState([
    { key: 1, value: "Music", description: "music@google.com" },
    { key: 2, value: "Food", description: "food@google.com" },
    { key: 3, value: "Travel", description: "travel@google.com" },
  ]);

  return (
    <div>
      <Autocomplete
        options={options}
        selectedList={selectedList}
        onSetSelectedList={setSelectedList}
      />
    </div>
  );
};

export default AutocompleteExample;
