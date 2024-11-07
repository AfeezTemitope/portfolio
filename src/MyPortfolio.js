import './MyPortfolio.css'
import Header from './components/Header'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Github from './components/Github'
import GithubFooter from './components/GithubFooter'
import Stack from './components/Stack'
import Boxes from './components/Boxes'
const MyPortfolio =()=>{
    return(
        <div className='portfolio-container'>
            <Github />
            <Header />
            <Intro />
            <AboutMe />
            <Stack />
            <Boxes />
            <GithubFooter />
        </div>
    )
}

export default MyPortfolio