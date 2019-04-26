export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You are not login',
      statusCode: 403
    })
  }
}
