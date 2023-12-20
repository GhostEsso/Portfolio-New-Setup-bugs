import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../libs/theme";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Ajoute ici tes éléments de head personnalisés */}
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* ... d'autres balises meta, link, etc. */}
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }           
}
