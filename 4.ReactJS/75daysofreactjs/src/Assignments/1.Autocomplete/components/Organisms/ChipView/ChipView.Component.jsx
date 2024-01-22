import {
  Avatar,
  CloseIcon,
  Content,
  Description,
  StyledChip,
  Title,
} from "./ChipView.styles";

const ChipView = ({ value, description, onDelete }) => {
  return (
    <StyledChip>
      <Avatar> {value[0]?.toUpperCase()}</Avatar>
      <Content>
        <Title>{value}</Title>
        <Description>{description}</Description>
      </Content>
      <CloseIcon onClick={onDelete} />
    </StyledChip>
  );
};

export default ChipView;
