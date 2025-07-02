
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'



/* const initialStat = {
 
} */

export const taskSlice = createSlice({

})


export const selectTask = (state: RootState) => state.task.value

export default taskSlice.reducer