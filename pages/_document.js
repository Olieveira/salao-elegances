import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html style={{minHeight: '100%'}}>
            <Head>
                <meta name='description' content='Salão Elegances, salão de beleza, cabeleireiro, manicure e pedicure, procedimentos estéticos, progressiva' />
                <meta name='author' content='Salão Elegances' />
                <meta name='robots' content='index, follow' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@300&family=Cinzel+Decorative&family=Jura:wght@700&family=Lalezar&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}