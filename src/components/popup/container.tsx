import React, { memo } from 'react';
import { Flex, color } from '@stacks/ui';
import { SettingsPopover } from './settings-popover';
import { useRecoilValue } from 'recoil';
import { hasRehydratedVaultStore } from '@store/recoil/wallet';
import { Header } from '@components/header';

interface PopupHomeProps {
  title?: string;
  onClose?: () => void;
  hideActions?: boolean;
}

export const PopupContainer: React.FC<PopupHomeProps> = memo(
  ({ children, title, onClose, hideActions }) => {
    const hasRehydratedVault = useRecoilValue(hasRehydratedVaultStore);

    if (!hasRehydratedVault) {
      console.error('No hasRehydratedVault, rendered null');
    }
    return (
      <Flex
        flexDirection="column"
        flexGrow={1}
        width="100%"
        background={color('bg')}
        data-test="container-outer"
        minHeight="100vh"
        maxHeight="100vh"
        position="relative"
        overflow="auto"
      >
        <SettingsPopover />
        <Header onClose={onClose} hideActions={hideActions} title={title} />
        {/*TODO: this seems like a bug, I think it could cause a blank screen some time*/}
        <Flex
          flexDirection="column"
          flexGrow={1}
          className="main-content"
          as="main"
          position="relative"
          width="100%"
          px="loose"
          pb="loose"
        >
          {hasRehydratedVault ? children : null}
        </Flex>
      </Flex>
    );
  }
);
