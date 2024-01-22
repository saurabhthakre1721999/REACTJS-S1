import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => (props.size === "full" ? "100%" : "auto")};
  padding: 8px;
  box-sizing: border-box;
  outline: ${(props) => (props.outline === "none" ? "none" : "auto")};
  border: ${(props) => (props.border === "0" ? "0" : "1px solid #ccc")};
`;

const InputView = ({
  type,
  value,
  placeholder,
  onChange,
  size,
  outline,
  border,
  onFocus,
  onBlur,
  myRef,
}) => {
  return (
    <StyledInput
      ref={myRef}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.name, e.target.value)}
      size={size}
      outline={outline}
      border={border}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

InputView.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  size: "",
  outline: "",
  border: "",
  onFocus: null,
  onBlur: null,
  myRef: null,
};

export default InputView;
