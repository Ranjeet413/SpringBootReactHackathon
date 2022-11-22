import { createSlice } from '@reduxjs/toolkit'
import { Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Unauthorised from '../components/Unauthorised'

export const userSlice = createSlice({

    name: 'user',
    initialState: {

        value: {
            id: ``,
            username: ``,
            loginStatus: false,
            component: <Route path='/dashboard' element={<Unauthorised />} />
        }
    },

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = {
                id: "",
                username: "",
                loginStatus: false,
                component: <Route path='/dashboard' element={<Unauthorised />} />
            }
        }

    }

})

export const { login, logout } = userSlice.actions
export default userSlice.reducer