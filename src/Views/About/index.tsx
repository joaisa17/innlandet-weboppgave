import Page, { Crumbs } from '@Components/Essential/Page';
import Hero from '@Components/Graphical/Hero';

import HamarKatedralskole from '@Assets/jpg/HamarKatedralskole.jpg'

const crumbs : Crumbs = [
    {
        path: '/',
        name: 'Hjemmeside'
    },

    {
        path: '/om-oss',
        name: 'Om oss'
    }
]

const Home = () => <Page crumbs={crumbs} title="Innlandet Fylkeskommune" pageClass='about'>
    <Hero src={HamarKatedralskole} />
    <div className='text-content'>
            <h1 className="title-light-bg mb-3">Om oss</h1>

            <h5 className='title-light-bg'>Hvem er Innlandet IT?</h5>
            <p>
                Innlandet IT er en bedrift innenfor Innlandet fylkeskommune som spesialiserer
                innnenfor temaet informasjonsteknologi.
            </p>

            <h5 className='title-light-bg'>Hva gjør vi?</h5>
            <p>
                Vi står bak det tekniske innenfor både videregående skole
                og i samfunnet. Det innebærer videreutvikling
                av nettsider og systemer, og drift av ulike IT-systemer.
            </p>

            <h5 className='title-light-bg'>Hvorfor gjør vi det?</h5>
            <p>
                I et industri-samfunn trenger man en IT-avdeling
                til å gjøre disse oppgavene. Vi er den avdelingen,
                og vi er stolte over det.
            </p>
    </div>
</Page>

export default Home;