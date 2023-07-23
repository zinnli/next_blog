import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 80vw;
  height: 8vh;
  padding: 10px 0;
  background-color: #fff;
`;

export const PageWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #111;
  font-size: 2.4rem;
  font-weight: bold;
`;
