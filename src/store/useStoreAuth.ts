import create       from "zustand";
import { devtools } from 'zustand/middleware'
import {IAuthState} from "../types/auth";

export const useStoreAuth = create<IAuthState>()(
  devtools(
    // persist(
    (set) => ({
      isLoggedIn : false,
      isInitialized: false,
      token: '',
      user: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        rights: 0,
        status: 0,
        roles: ['']
      },

      login: (userDto, tokenDto) => set((state)=> {
        // sessionStorage.setItem('jwtToken', tokenDto);
        return ({
          ...state,
          isLoggedIn: true,
          user: userDto,
          token: tokenDto
        })
      }),

      setToken: (tokenDto) => set((state)=> {
        return ({
          ...state,
          isInitialized: true,
          isLoggedIn: !!tokenDto,
          token: tokenDto
        })
      }),

      logout: () => set((state)=>{
        // sessionStorage.removeItem('jwtToken');
        return({
          ...state,
          isInitialized: true,
          isLoggedIn: false,
          user: {
            userName: '',
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            rights: 0,
            status: 0,
            roles: ['']
          },
          token: ''

        })
      })
    }),
    {
      name: 'Auth-storage',
    }
    // )
  )
)