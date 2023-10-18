import { Link, useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Error Page!!!</h1>
      <Link to="/dashboard"></Link>
    </div>
  )
}
export default Error
