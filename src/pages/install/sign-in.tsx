import React from 'react';
import { Text, Button, Input, Stack, color } from '@stacks/ui';

import { ErrorLabel } from '@components/error-label';
import { PopupContainer } from '@components/popup/container';
import { Caption } from '@components/typography';
import { useSignIn } from '@common/hooks/use-sign-in';

export const InstalledSignIn: React.FC = () => {
  const {
    onBack,
    onKeyDown,
    onChange,
    onPaste,
    onSubmit,
    value,
    error,
    isLoading,
    ref,
  } = useSignIn();

  return (
    <PopupContainer
      title="Continue with your Secret Key"
      onClose={onBack}
      hideActions
      key="sign-in"
    >
      <Caption>Enter your 12 or 24 word Secret Key to continue.</Caption>
      <Stack as="form" onSubmit={onSubmit} spacing="loose" mt="auto">
        <Stack spacing="base">
          {error && (
            <ErrorLabel lineHeight="16px">
              <Text
                textAlign="left"
                textStyle="caption"
                color={color('feedback-error')}
                data-test="sign-in-seed-error"
              >
                {error}
              </Text>
            </ErrorLabel>
          )}
          <Input
            autoFocus
            placeholder="Paste or type your Secret Key"
            as="textarea"
            fontSize="16px"
            autoCapitalize="off"
            spellCheck={false}
            width="100%"
            style={{ resize: 'none' }}
            minHeight="140px"
            ref={ref as any} // need to fix type in UI lib
            onKeyDown={onKeyDown as any} // need to fix type in UI lib
            onPaste={onPaste}
            onChange={onChange}
            value={value}
          />
        </Stack>
        <Button
          width="100%"
          isLoading={isLoading}
          isDisabled={isLoading}
          data-test="sign-in-key-continue"
          type="submit"
        >
          Continue
        </Button>
      </Stack>
    </PopupContainer>
  );
};
