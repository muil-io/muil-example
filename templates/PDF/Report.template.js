import React from "react";
import styled from "styled-components";
import { Page as BasePage } from "@muil/components";
import Pie from "./Pie";

const Page = styled(BasePage)`
  font-family: Helvetica, Arial, sans-serif;
  background-image: linear-gradient(
    to right,
    #1c315c,
    #1b315b,
    #1b305a,
    #1a3059,
    #1a2f58,
    #1d315a,
    #1f345c,
    #22365e,
    #293c63,
    #2f4268,
    #36486d,
    #3c4e72
  );
`;

const Title = styled.h1`
  color: #fff;
`;

const BoxesRow = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  background: #0f254f;
  border-radius: 10px;
`;

const BoxWrapper = styled.div`
  flex: 1;
  padding: 20px;
  background: #0f254f;
  border-radius: 10px;

  > h4 {
    color: #8b94a7;
    margin: 0 0 20px 0;
  }

  > h3 {
    color: #ffffff;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 24px;
`;

const Box = ({ title, value, children }) => (
  <BoxWrapper>
    <h4>{title}</h4>
    {children ?? <h3>{value.toLocaleString()}</h3>}
  </BoxWrapper>
);

const Report = () => (
  <Page>
    <Title>This is a simple report using Muil</Title>

    <Grid>
      <BoxesRow>
        <Box title="Counter1" value={3023} />
        <Box title="Counter2" value={1043} />
        <Box title="Counter3" value={1340} />
        <Box title="Counter4" value={1230} />
      </BoxesRow>

      <Box title="test">
        <Pie />
      </Box>

      <Box title="test">
        <Pie />
      </Box>
    </Grid>
  </Page>
);

Report.displayName = "Report";

export default Report;
