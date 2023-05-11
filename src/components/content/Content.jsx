import './content.less'

function Content() {
    return (
        <main>
            <section className="form-container">
                <div className="inputs">
                    <input type="text" name="up-prhase" placeholder='Top Phrase'/>
                    <input type="text" name="bottom-prhase" placeholder='Bottom Phrase'/>
                </div>
                <button type='button'>Get a new meme image 🖼️</button>
            </section>
            <section className="meme">
                {/* TODO: Aqui vai aparecer o meme com o texto e etc... */}
            </section>
        </main>
    )
}

export default Content