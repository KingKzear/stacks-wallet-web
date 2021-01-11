import React, { useState, useEffect } from 'react';
import { Text, Flex, FlexProps, Spinner, color } from '@stacks/ui';
import { ScreenPaths } from '@store/onboarding/types';
import { PlusInCircle } from '@components/icons/plus-in-circle';
import { ListItem } from './list-item';
import { AccountAvatar } from './account-avatar';
import { useAnalytics } from '@common/hooks/use-analytics';
import { useWallet } from '@common/hooks/use-wallet';
import { getGaiaAddress } from '@stacks/wallet-sdk';

const loadingProps = { color: '#A1A7B3' };
const getLoadingProps = (loading: boolean) => (loading ? loadingProps : {});

interface AccountItemProps extends FlexProps {
  label: string;
  iconComponent?: (props: { hover: boolean }) => void;
  isFirst?: boolean;
  hasAction?: boolean;
  onClick?: () => void;
  address?: string;
  selectedAddress?: string | null;
  loading?: boolean;
}

const AccountItem = ({ label, address, selectedAddress, ...rest }: AccountItemProps) => {
  const loading = address === selectedAddress;
  return (
    <Flex alignItems="center" maxWidth="100%" {...rest}>
      <Flex flex={1} maxWidth="100%">
        <Text
          display="block"
          maxWidth="100%"
          textAlign="left"
          textStyle="body.small.medium"
          style={{ wordBreak: 'break-word' }}
          {...getLoadingProps(!!selectedAddress)}
        >
          {label.replace(/\.id\.blockstack$/, '')}
        </Text>
      </Flex>
      <Flex width={4} flexDirection="column" mr={3}>
        {loading && <Spinner width={4} height={4} {...loadingProps} />}
      </Flex>
    </Flex>
  );
};

interface AccountsProps {
  accountIndex?: number;
  showAddAccount?: boolean;
  next?: (accountIndex: number) => void;
}

export const Accounts = ({ showAddAccount, accountIndex, next }: AccountsProps) => {
  const { wallet } = useWallet();
  const [selectedAddress, setSelectedAddress] = useState<null | string>(null);
  const { doChangeScreen } = useAnalytics();

  useEffect(() => {
    if (typeof accountIndex === 'undefined' && selectedAddress) {
      setSelectedAddress(null);
    }
  }, [accountIndex, setSelectedAddress, selectedAddress]);

  if (!wallet) return null;

  const accounts = wallet.accounts.map(account => ({
    username: account.username,
    address: getGaiaAddress(account),
  }));

  return (
    <Flex flexDirection="column">
      {accounts.map(({ username, address }, key) => {
        return (
          <ListItem
            key={key}
            isFirst={key === 0}
            cursor={selectedAddress ? 'not-allowed' : 'pointer'}
            iconComponent={() => <AccountAvatar username={username || address} mr={3} />}
            hasAction={!!next && selectedAddress === null}
            data-test={`account-${(username || address).split('.')[0]}`}
            onClick={() => {
              if (!next) return;
              if (selectedAddress) return;
              setSelectedAddress(address);
              next(key);
            }}
          >
            <AccountItem
              address={address}
              selectedAddress={selectedAddress}
              label={username || address}
              data-test={`account-index-${key}`}
            />
          </ListItem>
        );
      })}
      {showAddAccount && (
        <ListItem
          onClick={() => {
            if (selectedAddress) return;
            doChangeScreen(ScreenPaths.ADD_ACCOUNT);
          }}
          cursor={selectedAddress ? 'not-allowed' : 'pointer'}
          hasAction
          iconComponent={() => (
            <Flex
              justifyContent="center"
              width="36px"
              mr={3}
              color={color('text-caption')}
              transition="0.08s all ease-in-out"
            >
              <PlusInCircle />
            </Flex>
          )}
        >
          <Text textStyle="body.small.medium" {...getLoadingProps(!!selectedAddress)}>
            Add a new account
          </Text>
        </ListItem>
      )}
    </Flex>
  );
};
