import React from "react";
import styled from "styled-components";
import {
  StyleProvider,
  Container,
  Row,
  Column,
  Header6,
  Text,
  Spacer,
  BarChart as BaseBarChart,
  LineBar,
  Calendar as BaseCalendar,
} from "@muil/components";
import sentryLogo from "./sentryLogo.png";

const theme = {
  globalWidth: "690px",
  bodyBackground:
    "url('https://ci6.googleusercontent.com/proxy/AINTF4muQsDF9kzyE4N4AwGARmuLdBZyyS85_4wSAwMv7YZHKfcfOrdNCj924ph4fCEzkWR7vX0QYGmL464fmyceBFSCo_HYy_gOYoq68qS_atp8lNJjRn1H-SPvrm98OWvvySiDPi07SS7iwYjCYoN3W18Y6LGKKYSLoA=s0-d-e1-ft#https://s1.sentry-cdn.com/_static/dfbdb35426b86ed81b71a05ff01eb38e/sentry/images/email/sentry-pattern.png')",
};

const Image = styled.img`
  width: 125px;
`;

const Line = styled(Spacer).attrs(() => ({ size: 1 }))`
  border-bottom: 1px solid #dee7eb;
`;

const BarChart = styled(BaseBarChart)`
  td.column {
    padding-left: 0;
  }
`;

const Box = styled.div`
  width: 10px;
  height: 10px;
  background: ${({ color }) => color};
  margin-left: 20px;
  margin-right: 5px;
  margin-top: 5px;
`;

const Calendar = styled(BaseCalendar)`
  .score0 {
    background: #f9600c;
  }
  .score1 {
    background: #fa9453;
  }
  .score2 {
    background: #fae5cf;
  }
`;

const Title = styled(Header6)`
  font-weight: 600;
`;

const Small = styled(Text)`
  color: #9a9a9a;
`;

const Sentry = () => {
  return (
    <StyleProvider theme={theme}>
      <Container background="#fff">
        <Spacer size="20" />

        <Row>
          <Column>
            <Image src={sentryLogo} />
          </Column>

          <Column>
            <Title>Weekly Update for Muil</Title>
            <Small>April 5th, 2021 – April 12th, 2021</Small>
          </Column>
        </Row>

        <Line />

        <Spacer size="20" />

        <Row>
          <Column>
            <Title>Errors by Project</Title>
          </Column>
        </Row>

        <Row>
          <Column>
            <BarChart
              height={140}
              legend={false}
              categories={[{ color: "#422C6E" }]}
              series={[
                {
                  label: "Mon",
                  value: 53,
                },
                {
                  label: "Tue",
                  value: 13,
                },
                {
                  label: "Wed",
                  value: 26,
                },
                {
                  label: "Thu",
                  value: 43,
                },
                {
                  label: "Fri",
                  value: 43,
                },
                {
                  label: "Sat",
                  value: 43,
                },
                {
                  label: "Sun",
                  value: 43,
                },
              ]}
            />
          </Column>
        </Row>

        <Spacer size="40" />

        <Row>
          <Column large="4">
            <Title>Errors by Issue Type</Title>
          </Column>

          <Column large="7">
            <table>
              <tr>
                <td>
                  <Box color="#DF5120" />
                </td>
                <td>
                  <Text>New: 10%</Text>
                </td>
                <td>
                  <Box color="#FF7738" />
                </td>
                <td>
                  <Text>Reopened: 20%</Text>
                </td>
                <td>
                  <Box color="#F9C7B9" />
                </td>
                <td>
                  <Text>Existing: 70%</Text>
                </td>
              </tr>
            </table>
          </Column>
        </Row>

        <Row>
          <Column>
            <LineBar
              percents={[
                { value: 10, color: "#DF5120" },
                { value: 20, color: "#FF7738" },
                { value: 70, color: "#F9C7B9" },
              ]}
            />
          </Column>
        </Row>

        <Spacer size="40" />

        <Row>
          <Column>
            <Title>3 Month History</Title>
          </Column>
        </Row>

        <Row>
          <Column>
            <Calendar
              monthsBefore={1}
              monthsAfter={1}
              dayClassName={({ day }) => `score${day % 3}`}
            />
          </Column>
        </Row>

        <Spacer size="20" />

        <Line />

        <Spacer size="20" />

        <Row>
          <Column>
            <Small>Created using Muil</Small>
          </Column>
        </Row>
      </Container>
    </StyleProvider>
  );
};

Sentry.displayName = "Sentry Report Example";

export default Sentry;
