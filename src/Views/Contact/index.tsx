import Page, { Crumbs } from '@Components/Essential/Page';
import Hero from '@Components/Graphical/Hero';

import Link from '@CommonComponents/Link';

import HamarDronePhoto from '@Assets/jpg/HamarDronePhoto.jpg';

const crumbs : Crumbs = [
    {
        path: '/',
        name: 'Hjemmeside'
    },

    {
        path: '/kontakt-oss',
        name: 'Kontakt oss'
    }
]

const Home = () => <Page crumbs={crumbs} title="Innlandet Fylkeskommune" pageClass='contact'>
    <Hero src={HamarDronePhoto} />
    <div className='text-content'>
            <h1 className="title-light-bg mb-3">Kontakt oss</h1>

            <h5 className='title-light-bg'>Kontaktinformasjon</h5>
            <p>
                <li>Tlf: 123 45 696</li>
                <li>E-post: <Link dark to="mailto:joaisa17@innlandetfylke.no">joaisa17@innlandetfylke.no</Link></li>
                <li>Addresse: Free Download Print Templates, 268 Doe Meadow Dr, Owings Mills, 21117, US</li>
            </p>

            <h5 className='title-light-bg'>Lokasjon på Google Maps</h5>
            <iframe title="map" width="100%" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.8400699341228!2d-76.79556668430696!3d39.450346621764965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c816429228f421%3A0xe5fd793b67d22cbf!2sFree%20Download%20Print%20Templates%20%2C%20Free%20PSD%20%2C%20Vectors!5e0!3m2!1sen!2sno!4v1641986722715!5m2!1sen!2sno" loading="lazy"></iframe>
            
    </div>
</Page>

export default Home;