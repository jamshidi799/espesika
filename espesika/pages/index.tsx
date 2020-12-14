import Head from 'next/head';
import styles from './index.module.scss';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>
    </Layout>
  );
}
