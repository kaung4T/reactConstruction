import React from 'react'
import SS from './SS'

class GG extends SS {
  
    // public name: string | null

    constructor (name: string | null = null) {
        super(name)
        // this.name = name
    }

    fun () {
        return this.name
    }
}

export default GG