import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPython, faJava, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import './Stack.css'
const Stack =()=>{
    return (
        <div className="Stack">
        <h1>My Tech Stack</h1>
        <div className="icon-container">
          <FontAwesomeIcon icon={faHtml5} size="8x" className="icon" title="HTML5" />
          <FontAwesomeIcon icon={faCss3Alt} size="8x" className="icon" title="CSS3" />
          <FontAwesomeIcon icon={faJsSquare} size="8x" className="icon" title="JavaScript" />
          <FontAwesomeIcon icon={faPython} size="8x" className="icon" title="Python" />
          <FontAwesomeIcon icon={faJava} size="8x" className="icon" title="Java" />
          <FontAwesomeIcon icon={faPhp} size="8x" className="icon" title="PHP" />
          <FontAwesomeIcon icon={faReact} size="8x" className="icon" title="react" />
        </div>
      </div>
    )
}

export default Stack