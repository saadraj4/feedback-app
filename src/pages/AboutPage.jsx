import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or sercice</p>
        <p>Version: 1.1.1</p>
        <p><b>You can reach me out using given platform's Links</b></p>
        <Link to="https://www.facebook.com/Saad.Raj4">Facebook</Link><br />
        <Link to="https://www.instagram.com/saad.raj4/">Instagram</Link><br />
        <Link to="https://www.linkedin.com/in/saad-raj4/">Linkedin</Link><br />
        <Link to="https://twitter.com/saad_raj4">Twitter</Link><br />
        <Link to="https://github.com/saadraj4">Github</Link><br />
        <Link to="https://fiverr.com/saadraja8">Fiverr</Link><br />
        <p>
            <Link to="/"><b>Back to Home</b></Link>
        </p>
        </div>

    </Card>
  )
}

export default AboutPage