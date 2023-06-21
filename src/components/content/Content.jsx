import './content.less'
import MemesData from '../app/memesData.js'

let selectedMeme = {};

function Content() 
{
    changeImage();
    return (
        <main>
            <section className="form-container">
                <div className="inputs">
                    <input type="text" name="up-prhase" placeholder='Top Phrase'/>
                    <input type="text" name="bottom-prhase" placeholder='Bottom Phrase'/>
                </div>
                <button onClick={changeImage} type='button'>Get a new meme image 🖼️</button>
            </section>
            <section className="meme">
                <img 
                    src={selectedMeme.url} 
                    width={selectedMeme.width} 
                    height={selectedMeme.height} 
                    alt={selectedMeme.name} 
                    name={selectedMeme.name} 
                />
            </section>
        </main>
    )
}

function changeImage() {
    selectedMeme = memesDataPayload()[Math.floor(Math.random()*memesDataPayload().length)];
}

function memesDataPayload() 
{
    const {memes} = MemesData.data;
    return memes;
}

export default Content