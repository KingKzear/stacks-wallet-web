import { BoxProps, color, Circle } from '@stacks/ui';
import React from 'react';
import { Account, getAccountDisplayName } from '@stacks/wallet-sdk';

import { useAccountGradient } from '@common/hooks/use-account-gradient';

export const AccountAvatar: React.FC<{ account: Account } & BoxProps> = ({ account, ...props }) => {
  const displayName = getAccountDisplayName(account);
  const gradient = useAccountGradient(account);

  const circleText = displayName?.includes('Account') ? displayName.split(' ')[1] : displayName[0];
  return (
    <Circle backgroundImage={gradient} color={color('bg')} {...props}>
      {circleText}
    </Circle>
  );
};
