import React from 'react'
import Parent from './Parent'

class Child extends Parent {
    // public name: string | null

    constructor (name: string | null = null) {
        super(name)
        // this.name = name
    }

    fun () {
        return this.name
    } 
}

export default Child