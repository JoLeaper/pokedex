import React, { Component } from 'react'
import {BrowserRouter as Route, Switch} from 'react-router-dom'
import SearchPage from './SearchPage.js'
import Header from './Header.js'
import PokemonDetail from './PokemonDetail.js'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div className ='searchBox'>
                <Switch>
                    <Route
                    path ="/"
                    exact
                    render={(routerProps) => <SearchPage {...routerProps} />}
                    />
                    <Route
                    path ="/pokemon/:id"
                    render={(routerProps) => <PokemonDetail {...routerProps} />}
                    />
                </Switch>

                    {/* <Route
                    path ="/search"
                    render={(routerProps) => <SearchPage {...routerProps} />}
                    /> */}

                </div>
            </div>
        )
    }
}
