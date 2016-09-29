import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  render () {
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange (term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

}

SearchBar.propTypes = {
  onSearchTermChange: React.PropTypes.func.isRequired
}
