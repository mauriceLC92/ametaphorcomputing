import { AppProps } from 'next/app';
import '../styles/global.css';

import 'typeface-open-sans';
import 'typeface-merriweather';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
