import React from "react";
import styled from "styled-components";
import { Page as BasePage } from "@muil/components";
import Pie from "./Pie";
import Area from "./Area";

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
  ${({ $span }) => $span && `grid-column: span ${$span};`}

  > h4 {
    color: #9b9b9b;
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

const Box = ({ title, value, children, span }) => (
  <BoxWrapper $span={span}>
    <h4>{title}</h4>
    {children ?? <h3>{value.toLocaleString()}</h3>}
  </BoxWrapper>
);

const Report = () => (
  <>
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

        <Box title="Area" span={2}>
          <Area />
        </Box>
      </Grid>
    </Page>

    <BasePage>
      The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum." Section
      1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
      corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
      nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
      nulla pariatur?" 1914 translation by H. Rackham "But I must explain to you
      how all this mistaken idea of denouncing pleasure and praising pain was
      born and I will give you a complete account of the system, and expound the
      actual teachings of the great explorer of the truth, the master-builder of
      human happiness. No one rejects, dislikes, or avoids pleasure itself,
      because it is pleasure, but because those who do not know how to pursue
      pleasure rationally encounter consequences that are extremely painful. Nor
      again is there anyone who loves or pursues or desires to obtain pain of
      itself, because it is pain, but because occasionally circumstances occur
      in which toil and pain can procure him some great pleasure. To take a
      trivial example, which of us ever undertakes laborious physical exercise,
      except to obtain some advantage from it? But who has any right to find
      fault with a man who chooses to enjoy a pleasure that has no annoying
      consequences, or one who avoids a pain that produces no resultant
      pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
      Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos
      ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas molestias excepturi sint occaecati cupiditate non
      provident, similique sunt in culpa qui officia deserunt mollitia animi, id
      est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
      distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
      nihil impedit quo minus id quod maxime placeat facere possimus, omnis
      voluptas assumenda est, omnis dolor repellendus. Temporibus autem
      quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
      ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
      earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
      voluptatibus maiores alias consequatur aut perferendis doloribus
      asperiores repellat." 1914 translation by H. Rackham "On the other hand,
      we denounce with righteous indignation and dislike men who are so beguiled
      and demoralized by the charms of pleasure of the moment, so blinded by
      desire, that they cannot foresee the pain and trouble that are bound to
      ensue; and equal blame belongs to those who fail in their duty through
      weakness of will, which is the same as saying through shrinking from toil
      and pain. These cases are perfectly simple and easy to distinguish. In a
      free hour, when our power of choice is untrammelled and when nothing
      prevents our being able to do what we like best, every pleasure is to be
      welcomed and every pain avoided. But in certain circumstances and owing to
      the claims of duty or the obligations of business it will frequently occur
      that pleasures have to be repudiated and annoyances accepted. The wise man
      therefore always holds in these matters to this principle of selection: he
      rejects pleasures to secure other greater pleasures, or else he endures
      pains to avoid worse pains."
    </BasePage>
  </>
);

Report.displayName = "Report Example";

export default Report;
