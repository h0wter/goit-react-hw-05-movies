import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #d5d9d9;
  box-shadow: rgba(213, 217, 217, 0.979) 0 5px 4px 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 15px;
`;

export const Link = styled(NavLink)`
  position: relative;
  font-weight: 500;
  text-decoration: none;

  &:hover:after {
    content: '';
    position: absolute;
    display: flex;
    height: 2px;
    width: 100%;
    background-color: black;
  }

  &.active {
    color: red;
    &:after {
      background-color: red;
    }
  }
`;
