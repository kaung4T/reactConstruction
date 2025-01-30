import React from 'react'

abstract class Parent {
    public name: string | null

    constructor (name: string | null = null) {
        this.name = name
    }
}

export default Parent