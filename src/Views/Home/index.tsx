import Page from '@Components/Essential/Page';

import LogoBackground from '@Components/Graphical/LogoBackground';

const Home = () => <Page title="Innlandet Fylkeskommune" pageClass='home'>
    <div className='top'>
        <LogoBackground />
        <div className='intro'>
            <h2 className="title-light-bg">Innlandet IT</h2>

            <p>
                Moren din heter Lorem Ipsum
            </p>
        </div>
    </div>
</Page>

export default Home;