import { compose, withState, withHandlers } from 'recompose'

export default compose(
  withState('leftItems', 'setLeftItems', []),
  withState('rightItems', 'setRightItems', []),
  withHandlers({
    onSubmitSearch: ({ setLeftItems }) => item => {
      setLeftItems(items => [...items, item])
    }
  })
)
