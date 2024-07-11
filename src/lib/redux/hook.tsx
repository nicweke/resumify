import { useEffect } from "react"
import { AppDispatch, RootState, store } from "@/lib/redux/store"
import { saveStateToLocalStorage } from "@/lib/redux/local-storage"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch : () => AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export const useSaveStateToLocalStorageOnChange = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveStateToLocalStorage(store.getState());
    });
    return unsubscribe;
  }, [])
      
}

export const useSetInitialStore = () => {
    const dispatch = 

}