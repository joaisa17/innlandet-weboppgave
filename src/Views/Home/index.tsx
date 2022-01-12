import Page from '@Components/Essential/Page';
import { useNavigate } from 'react-router-dom';

import Hero from '@Components/Graphical/Hero';

import HamarSentrum from '@Assets/jpg/HamarSentrum.jpg';
import LogoBackground from '@Components/Graphical/LogoBackground';

import Button from '@muim/Button';

const Home = () => {

    const navigate = useNavigate();

    return <Page title="Innlandet Fylkeskommune" pageClass='home'>
        <Hero src={HamarSentrum} />
        <div className='top'>
            <LogoBackground />
            <div className='intro'>
                <h1>Innlandet IT</h1>

                <p>
                    Den offisielle nettsiden for Innlandet fylkeskommunes
                    IT avdeling. Her finner du nyttig informasjon
                    om bedriften, og hvordan du kontakter oss.
                </p>
            </div>
        </div>

        <div className='buttons'>
            <h3>Foreslåtte sider:</h3>
            <div className='button-group'>
                <Button variant="contained" onClick={() => navigate("/om-oss")}>Om Oss</Button>
                <Button variant="contained" onClick={() => navigate("/kontakt-oss")}>Kontakt Oss</Button>
            </div>
        </div>
    </Page>
}

export default Home;