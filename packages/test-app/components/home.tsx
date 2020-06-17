import React, { useContext, useState } from 'react';
import { AppContext } from '@common/context';
import { Box, Spinner, Text, Flex, space, BoxProps } from '@blockstack/ui';
import { Auth } from './auth';
import { Tab } from './tab';
import { Status } from './status';
import { Counter } from './counter';
import { useFaucet } from '@common/use-faucet';
import { ExplorerLink } from './explorer-link';

type Tabs = 'status' | 'counter';

const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box width="100%" px={6} {...props}>
      <Box maxWidth="900px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export const Home: React.FC = () => {
  const state = useContext(AppContext);
  const [tab, setTab] = useState<Tabs>('status');
  const faucet = useFaucet();

  const Page: React.FC = () => {
    if (faucet.loading) {
      return (
        <Container px={6} width="100%">
          <Spinner mr={4} />
          <Text textStyle="body.large">Setting up...</Text>
        </Container>
      );
    }
    if (faucet.balance === 0) {
      return (
        <Container px={6} width="100%">
          <Spinner mr={4} />
          <Text textStyle="body.large" display="block">
            Please wait while we get you some Stacks tokens to test with
          </Text>
          <ExplorerLink txId={faucet.txId} />
        </Container>
      );
    }

    return (
      <>
        <Container borderColor="#F0F0F5" borderWidth={0} borderBottomWidth="1px">
          <Flex>
            <Tab active={tab === 'status'}>
              <Text onClick={() => setTab('status')}>Status smart contract</Text>
            </Tab>
            <Tab active={tab === 'counter'}>
              <Text onClick={() => setTab('counter')}>Counter smart contract</Text>
            </Tab>
          </Flex>
        </Container>
        <Container>{tab === 'status' ? <Status /> : <Counter />}</Container>
      </>
    );
  };
  return (
    <Flex flexWrap="wrap">
      <Container mt={space('base-loose')}>
        <Text as="h1" textStyle="display.large" fontSize={7} mb={space('loose')} display="block">
          Testnet Demo
        </Text>
      </Container>
      {state.userData ? (
        <Page />
      ) : (
        <Container>
          <Auth />
        </Container>
      )}
    </Flex>
  );
};
