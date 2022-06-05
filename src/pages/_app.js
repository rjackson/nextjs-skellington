import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Anchor, Header, Panel, Section, SingleColumnLayout, usePrefersDark } from "@rjackson/rjds";
import Link from "next/link";
import useFathom from "@hooks/useFathom";

function MyApp({ Component, pageProps }) {
  const prefersDark = usePrefersDark();

  useFathom();

  return (
    <SingleColumnLayout
      className={prefersDark ? "dark" : ""}
      header={
        <Header className="items-center">
          <Link href="/" passHref>
            <Anchor>
              <h1 className="text-2xl font-semibold text-center">{`spoopy skellington`}</h1>
            </Anchor>
          </Link>
        </Header>
      }
      footer={
        <Section as="footer" className="flex flex-row justify-center space-x-4">
          <p>
            <Link href="https://rjackson.dev" passHref>
              <Anchor aria-label="RJackson.dev">rjackson.dev</Anchor>
            </Link>
          </p>
        </Section>
      }
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>{`SPOOPY SKELLINGTON`}</title>
        <meta name="description" content="Spoopy bones and all." key="description" />
      </Head>
      <Panel>
        <Component {...pageProps} />
      </Panel>
    </SingleColumnLayout>
  );
}

export default MyApp;
