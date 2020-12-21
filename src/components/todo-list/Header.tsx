import React, { FC } from "react";
import styled from "styled-components";

const SearchPanel = styled.header`
  height: 20px;
`;

interface HeaderProps {
  textHint?: string;
  selectIcon?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { selectIcon } = props;

  return (
    <SearchPanel>
      <span>{selectIcon ?? "🐷"}</span>
      <input type="text" placeholder={props.textHint} />
    </SearchPanel>
  );
};
export default Header;
