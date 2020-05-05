import React, { Component } from 'react';
import './SortSelector.css'

export default class SortSelector extends Component {
    render() {
        return (
            <div className="sort">
                <div className='sortOrder'>
                    <p>Display Order:</p>
                    <select value={this.props.displayOrder} onChange={this.props.handleOrderChange}>
                        <option value='asc'>Low to High</option>
                        <option value='desc'>High to Low</option>
                    </select>
                </div>
                <div className='sortBy'>
                    <p>Sort By:</p>
                    <select value={this.props.sortBy} onChange={this.props.handleSortChange}>
                        <option value='id'>ID</option>
                        <option value='attack'>Attack</option>
                        <option value='defense'>Defense</option>
                    </select>


                </div>

            </div>
        )
    }
}
