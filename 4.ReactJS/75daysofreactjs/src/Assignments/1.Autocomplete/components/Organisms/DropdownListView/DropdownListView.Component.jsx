import PropTypes from "prop-types";
import {
  Avatar,
  Description,
  SuggestionContent,
  SuggestionItem,
  SuggestionsList,
  Title,
} from "../Autocomplete/Autocomplete.Styles";
import { NoElementsAvailable } from "./DropdownListView.styles";

const DropdownListView = ({ isFocused, data, onClick }) => {
  const noSuggestionsMessage = (
    <NoElementsAvailable style={{ padding: "0 12px" }}>
      You have reached the end of the list
    </NoElementsAvailable>
  );

  if (isFocused && data.length === 0) {
    return <SuggestionsList>{noSuggestionsMessage}</SuggestionsList>;
  }

  if (!isFocused) {
    return null;
  }

  return (
    <SuggestionsList>
      {data.map((suggestion) => (
        <SuggestionItem
          key={suggestion.key}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onClick(suggestion)}
        >
          <Avatar>{suggestion.value.charAt(0).toUpperCase()}</Avatar>
          <SuggestionContent>
            <Title>{suggestion.value}</Title>
            <Description>{suggestion.description}</Description>
          </SuggestionContent>
        </SuggestionItem>
      ))}
    </SuggestionsList>
  );
};

DropdownListView.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

DropdownListView.defaultProps = {
  isFocused: false,
  data: [],
  onClick: () => {},
};

export default DropdownListView;
