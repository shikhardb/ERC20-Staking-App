import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'mumbai';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId="2f91ff350797c410133270d09f8395ea"
		>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;
