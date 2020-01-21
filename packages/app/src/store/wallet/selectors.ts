import { IAppState } from '..';

export const selectCurrentWallet = (state: IAppState) => {
  return state.wallet.currentWallet;
};

export const selectSeed = (state: IAppState) => state.wallet.seed;

export const selectIsRestoringWallet = (state: IAppState) => state.wallet.isRestoringWallet;
