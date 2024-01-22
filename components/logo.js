import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = "https://github.com/GhostEsso/cdn/blob/main/images/coding-dark.png?raw=true";

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={30} height={30} alt="logo"/>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS ROUNDED 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Essohanam TAMBANA
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;
