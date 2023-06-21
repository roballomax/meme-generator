import './header.less'
import TrollFace from '../../assets/trollface.png'

function Header() 
{
    return (
        <header>
            <div className="logo-container">
                <img src={TrollFace} alt="Memes, tipos de carinha são" />
                <h3>Meme Generator</h3>
            </div>
            <div className="title-container">
                <h4>React Course - Project 3</h4>
            </div>
        </header>
    )
}

export default Header