import * as React from 'react'
import Syllable from './components/syllable'

export default class Root extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Syllable/>
      </div>
    )
  }
}
