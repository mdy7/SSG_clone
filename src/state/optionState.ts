// recoil atom
import { optionListType } from '@/types/optionListType';
import { atom } from 'recoil';

// recoil persist
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const optionState = atom({
  key: 'optionState',
  default: [] as optionListType[],
  effects_UNSTABLE: [persistAtom],
});

export const optionSelectorOpenState = atom({
  key: 'optionSelectorOpenState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const selectedOptionsState = atom({
  key: 'selectedOptionsState',
  default: {
    color: null,
    size: null,
    addOption: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const isLastOptionSelectedState = atom({
  key: 'isLastOptionSelectedState',
  default: false,
});
