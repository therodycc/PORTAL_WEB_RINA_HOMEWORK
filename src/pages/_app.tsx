import { AppPropsWithLayout } from '../interfaces/app.interface';
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        getLayout(<Component {...pageProps} />)
    )
}

export default MyApp
