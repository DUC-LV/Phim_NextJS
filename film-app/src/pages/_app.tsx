import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from "../component/Layout";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
	return <Layout>
		<NextNProgress
			color='red'
			startPosition={0.3}
			stopDelayMs={200}
			height={1.5}
			showOnShallow={true}
		/>
		<Component {...pageProps} />
	</Layout>
}

export default MyApp
