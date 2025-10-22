import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> ابزار محمد - فروش و تعمیر ابزارآلات برقی</title>
                <meta
                    name="description"
                    content="بازار ابزار، فروشگاه تخصصی فروش و تعمیر ابزارآلات برقی شامل دریل، اره، فرز و تجهیزات صنعتی همراه با مقالات آموزشی."
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;