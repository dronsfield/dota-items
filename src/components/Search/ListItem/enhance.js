import { compose, withState, withHandlers, pure } from 'recompose'

export default compose(
  withHandlers({
    onClick: ({ onSubmit, item }) => () => onSubmit(item)
  }),
  pure
)
