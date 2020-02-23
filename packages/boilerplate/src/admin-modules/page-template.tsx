import { connect } from 'react-redux'

import { counterInit, someModuleinit } from './admin-modules/admin-modules'
console.log('someModuleinit')
someModuleinit()

console.log('counterInit')
counterInit()

const Counter = (props: any) => {
  return (
    <div>
      <p>Count: {props.count}</p>
      <p>Count: {props.someModuleCount}</p>
      <button onClick={props.countUp}>COUNT_UP</button>
      <button onClick={props.countDown}>COUNT_DOWN</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return { count: state.counter.count, someModuleCount: state.someModule.count }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    countUp: () => dispatch({ type: `COUNT_UP` }),
    countDown: () => dispatch({ type: `COUNT_DOWN` }),
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
