import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardList } from '../components/CardList'
import { SearchBox } from '../components/SearchBox'
import { Scroll } from '../components/Scroll'
import './App.css'
import 'tachyons'

import { setSearchField, requestRobots } from '../actions'

const mapSateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    onSearchChange: (event) => dispach(setSearchField(event.target.value)),
    onRequestRobots: () => dispach(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return (
      <div className='tc'>
        <h1 className='f1'>RobotsFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> :
            <CardList robots={filterRobots} />
          }
        </Scroll>
      </div>
    )
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(App)