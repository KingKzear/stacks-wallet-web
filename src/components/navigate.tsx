import React, { useEffect } from 'react';
import { useAnalytics } from '@common/hooks/use-analytics';
import { ScreenPaths } from '@store/onboarding/types';
import { useNavigate, ToOptions } from 'react-router-dom';

interface NavigateProps {
  to: string | ToOptions;
  screenPath: ScreenPaths;
}

export const Navigate: React.FC<NavigateProps> = ({ to, screenPath }) => {
  const { doChangeScreen } = useAnalytics();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
    doChangeScreen(screenPath, false);
  }, [screenPath, doChangeScreen, to, navigate]);

  return null;
};
