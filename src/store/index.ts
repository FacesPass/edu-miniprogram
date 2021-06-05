import { createContext, useContext } from 'react'
import { MyStore } from './my-store'

const createStores = () => ({
  MyStore
})


const stores = createStores()

const StoreContext = createContext(stores)
const useStores = useContext(StoreContext)

export function useMyStore() {
  const { MyStore } = useStores
  return MyStore
}


