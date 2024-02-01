import styled from "styled-components";
import { Table } from "antd";

export const ContainerTable = styled.div`
  margin: 1rem;
`;

export const StyledTable = styled(Table)`
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
`;
