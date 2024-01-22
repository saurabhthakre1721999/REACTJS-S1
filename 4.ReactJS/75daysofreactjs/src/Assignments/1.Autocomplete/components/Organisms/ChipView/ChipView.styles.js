import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

export const StyledChip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 4px;
  padding-right: 12px;
  gap: 4px;
  font-weight: bold;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

export const Description = styled.span`
  font-size: 11px;
  color: #aaa;
`;

export const CloseIcon = styled(IoMdClose)`
  cursor: pointer;
`;
