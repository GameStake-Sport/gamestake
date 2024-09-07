import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dexsport Clone</title>
                <meta name="description" content="Sports betting powered by blockchain" />
            </Head>

            <Header />
            <Hero />
            <Features />
        </div>
    );
};

export default Home;
