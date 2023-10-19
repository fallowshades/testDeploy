import Wrapper from '../../assets/wrappers/Landing'
import main from '../../assets/images/main.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div>
          <h1 className="semi-font-bold">
            <span className="text-teal-500">Hamoria</span> presenterar
          </h1>
          <p className="leading-6 mb-6 max-w-[35em]">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="happy adventure" className="hidden md:block " />
      </div>
    </Wrapper>
  )
}
export default Landing
