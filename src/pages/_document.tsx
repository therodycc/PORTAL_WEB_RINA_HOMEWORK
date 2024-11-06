import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                    <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/png" />
                    {/* <link rel="stylesheet" href="/assets/styles/tailwind.css" /> */}
                    <link rel="stylesheet" href="/assets/styles/globals.css" />
                </Head>
                <body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument