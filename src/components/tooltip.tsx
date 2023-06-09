import * as React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { Box, BoxProps } from '@stacks/ui';
import { memo, useMemo } from 'react';

export const Tooltip: React.FC<
  TippyProps & { label?: TippyProps['content']; labelProps?: BoxProps }
> = memo(({ label, labelProps = {}, children, ...rest }) => {
  if (!label) return <>{children}</>;
  const content = useMemo(
    () => (
      <Box as="span" display="block" fontSize={0} {...labelProps}>
        {label}
      </Box>
    ),
    [labelProps, label]
  );
  return (
    <Tippy content={content} trigger="mouseenter" hideOnClick={undefined} {...rest}>
      {children}
    </Tippy>
  );
});
