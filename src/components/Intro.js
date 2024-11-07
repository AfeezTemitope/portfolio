import { faEnvelope, faMobilePhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Intro.css'
const Intro =()=>{
    return(
        <div className='Intro-box'>
        <div className='about-me'> 
            <h2>Software<br/>Engineer</h2> 
            <h1>Bello Afeez</h1> <h3>Jan - 04</h3> 
        </div>
            <div className='image-of-me'>
                <img className='my-icon' src='https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=4kYwQ1H0Af8lGw&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f585e4bcdcb11b227491c3396.png&ehk=qIyBqqHtuGh6Q4AT6rdJLjmcvimJ9e8r05TLahpkS0o%3d&risl=&pid=ImgRaw&r=0' alt='my icon' />
                <p> <strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} size="1x" className="icon" /> <br/> <a href="mailto:bello.afeez@example.com">belloafeez28@example.com</a> </p> 
                <p> <a href="https://wa.me/9014465194" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faMobilePhone} size="1x" className="icon" /> Chat on whatsapp </a></p> 
            </div>
        </div>
    )
}
export default Intro

