import { useEffect } from "react";
import { AppDispatch, RootState, store } from "@/lib/redux/store";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "@/lib/redux/local-storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { deepMerge } from "@/lib/deep-merge";
import { initialResumeState, setResume } from "@/lib/redux/resumeSlice";
import { Resume } from "@/lib/redux/types";
import {
  Settings,
  initialSettings,
  setSettings,
} from "@/lib/redux/settingsSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveStateToLocalStorage(store.getState());
    });
    return unsubscribe;
  }, []);
};

export const useSetInitialStore = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const state = loadStateFromLocalStorage();
    if (!state) return;
    if (state.resume) {
      const mergedResumeState = deepMerge(
        initialResumeState,
        state.resume
      ) as Resume;
      dispatch(setResume(mergedResumeState));
    }
    if (state.settings) {
      const mergedSettingsState = deepMerge(
        initialSettings,
        state.settings
      ) as Settings;
      dispatch(setSettings(mergedSettingsState));
    }
  }, []);
};
