import React from 'react'

abstract class SS {
  
    public name: string | null

    constructor (name: string | null = null) {
        this.name = name
    }
}

export default SS