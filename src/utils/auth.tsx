import React from 'react'
import Server from './hook'
import Cookies from 'universal-cookie'

const Auth = () => {

    const cookies = new Cookies()

    const login = async (payload: any) => {
        const data = await Server.post('auth/login', {
            name: payload.name,
            password: payload.password
        })
        
        const response = await data.data

        console.log("real", response.access_token)

        /***
         * use access only
         */
        sessionStorage.setItem("JWT", response.access_token)

        /***
         * use refresh
         */
        // sessionStorage.setItem("JWT", response.access_token)
        // sessionStorage.setItem("JWT_REFRESH", response.refresh_token)

        // cookies.set("JWT", response.access_token, {
        //     path: "/",
        //     secure: true,
        //     sameSite: "lax",
        //     expires: new Date(Date.now() + 324234)
        // })

        // cookies.set("JWT_REFRESH", response.refresh_token, {
        //     path: "/",
        //     secure: true,
        //     sameSite: "lax",
        //     expires: new Date(Date.now() + 324234)
        // })
    }

    const logout = async () => {
        await Server.post('auth/logout')

        /***
         * use access only
         */
        sessionStorage.removeItem("JWT")

        /***
         * use refresh
         */
        // sessionStorage.removeItem("JWT")
        // sessionStorage.removeItem("JWT_REFRESH")

        // cookies.remove("JWT", {
        //     path: "/"
        // })

        // cookies.remove("JWT_REFRESH", {
        //     path: "/"
        // })
    }

    return {
        login,
        logout
    }
}

export default Auth