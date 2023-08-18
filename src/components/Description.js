import Ilustration from '../images/illustration-intro.png';
import '../styles/Description.css';

const Description = () =>{
    return(
        <div className='description'>
            <div>
                <img className="ilustration1" src={Ilustration} alt='Ilustration'/>
                <h2>All your files in one secure location, accessible anywhere.</h2>
                <p>
                    Fylo stores all your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends family, and co-workers.
                </p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Description;