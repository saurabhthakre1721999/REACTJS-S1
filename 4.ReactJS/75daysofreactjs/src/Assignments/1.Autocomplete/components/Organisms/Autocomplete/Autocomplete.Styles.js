import styled from "styled-components";

export const AutocompleteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid silver;
  padding: 4px;
  height: 42px;
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 320px;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const SuggestionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const SuggestionContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

export const Description = styled.span`
  font-size: 11px;
  color: #aaa;
`;
