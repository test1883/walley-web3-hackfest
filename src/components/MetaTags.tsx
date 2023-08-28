import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  image?: string | null;
};

export function MetaTags(props: Props) {
  return (
    <Head>
      <title>Walley - Go Phoneless</title>
      <meta name="description" content="Go Phoneless in this Cashless Era!" />
      <meta property="og:title" content="Walley - Go Phoneless" />
      <meta property="og:description" content="Go Phoneless in this Cashless Era!" />
      <meta property="og:type" content="website" />
      <meta content={props.image || `${process.env.NEXT_PUBLIC_HOSTNAME}/bos-meta.png`} property="og:image" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NEARProtocol" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      
    </Head>
  );
}
