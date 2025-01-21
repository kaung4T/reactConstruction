import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'

const api : AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true
}

const Server : AxiosInstance = axios.create(api)

const cookies = new Cookies()
let refresh: Boolean = false

Server.interceptors.request.use((data) => {
    // const token = cookies.get("JWT")
    const token = sessionStorage.getItem("JWT")
    if (token) {
        data.headers.Authorization = `Bearer ${token}`
    }
    return data
}, (error) => {
    return Promise.reject(error)
})

Server.interceptors.response.use( async (data) => {
    /***
     * Handling the token without error
     */
    // if (data.data.message === "Token refreshed" && !refresh) {
    //     refresh = true
    //     try {
    //         const response = await Server.post("auth/refresh")
    //         const data = response.data
    //         sessionStorage.setItem("JWT", data.access_token)
    //     }
    //     catch (error) {
    //         location.pathname !== "/" && (window.location.href = "/")
    //     }
    // }
    /*** */
    return data
}, async (error) => {
    const originalRequest = error.config
    if (error.response && error.response.status === 401 && !refresh) {
        refresh = true

        console.log(originalRequest.headers.Authorization)
        
        /***
         * use refresh
         */
        // const refresh_token = cookies.get("JWT_REFRESH")
        // const refresh_token = sessionStorage.getItem("JWT_REFRESH")

        try {
            /***
             * use access only
             */
            const response = await Server.post("auth/refresh")
            const data = response.data

            sessionStorage.setItem("JWT", data.access_token)

            /***
             * use refresh
             */
            // const response = await Server.post("auth/refresh", {refresh_token: refresh_token})
            // const data = response.data

            // sessionStorage.setItem("JWT", data.access_token)
            // sessionStorage.setItem("JWT_REFRESH", data.refresh_token)

            // cookies.set("JWT", data.access_token, {
            //     path: "/",
            //     secure: true,
            //     sameSite: "lax",
            //     expires: new Date(Date.now() + 324234)
            // })

            // cookies.set("JWT_REFRESH", data.refresh_token, {
            //     path: "/",
            //     secure: true,
            //     sameSite: "lax",
            //     expires: new Date(Date.now() + 324234)
            // })
            return Server(originalRequest)
        }
        catch (error) {
            location.pathname !== "/" && (window.location.href = "/")
        }
    }

    return Promise.reject(error)
})

export default Server