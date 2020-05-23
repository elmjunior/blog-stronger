import Container from '../components/container';

import Intro from '../components/intro';
import Layout from '../components/layout';

import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Header from '../components/header';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Intro title={'Get in touch'} />
        </Container>
      </Layout>
    </>
  );
}
