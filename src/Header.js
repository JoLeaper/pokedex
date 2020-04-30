import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title'>Welcome to the Pokedex!</h1>
                {/* <h1 className='nav'>Nav</h1> */}
            </div>
        )
    }
}
