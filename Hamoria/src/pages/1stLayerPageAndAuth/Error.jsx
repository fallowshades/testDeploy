import { Link, useRouteError } from 'react-router-dom'
import img from '../../assets/images/not-found.svg'
import Wrapper from '../../assets/wrappers/ErrorPage'
const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404)
    return (
      <Wrapper>
        <div className="text-center">
          <img src={img} alt="not found" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we could't find the page you're looking for
          </p>
          <div className="mt-10">
            <Link to="/">Go back to Landing</Link>
          </div>
        </div>
      </Wrapper>
    )
  return (
    <main className="grid min-h-[100vh]-center px-8">
      <h4 className="text-center font-bold, text-4xl"> There was an error</h4>
    </main>
  )
}
export default Error
