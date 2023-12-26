import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Space Hub">
            <Container>
                <Title>
                    Space Hub <Badge>2023</Badge>
                </Title>
            </Container>
            <P>
            Space Travelers Hub is a web application that provides commercial and scientific space travel services.
            The application will allow users to book rockets and join selected space missions.
            In collboration with 
            <a
            href="https://github.com/Errytagedesign"
            target="_blank"
            rel="noreferrer"
            style={{
                textDecoration: 'none',
                color: '#fff',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
            }}
            onMouseOver={(e) => { e.target.style.color = '#fff'; e.target.style.textDecoration = 'underline'; }}
            onMouseOut={(e) => { e.target.style.color = '#fff'; e.target.style.textDecoration = 'none'; }}
            >
             <br />Sodeeq Olaide Awoyemi
            </a>

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://space-travelers-qg24.onrender.com/">
                        Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>Ruby on Rails</span>
                </ListItem>
            </List>
            <WorkImage src="../images/works/spacehub.png" alt="spacehub" />
        </Layout>        
    )
}

export default Work;