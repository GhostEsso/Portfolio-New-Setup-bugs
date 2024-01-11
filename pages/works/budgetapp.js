import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="React Instagram Clone">
            <Container>
                <Title>
                    Budget App (SmartPocket) <Badge>2023</Badge>
                </Title>
            </Container>
            <P>
            The SmartPocket app manages your expenses.
                        You have the ability to make, change, or remove categories and transactions.
                        Each transaction is linked to one or multiple categories.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> WEBAPP </Meta>
                    <Link href="https://moyin-3unn.onrender.com/">
                        Webapp <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Github </Meta>
                    <Link href="https://github.com/GhostEsso/my-budget-app">
                    Source Code <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> STACK </Meta>
                    <span>Ruby on Rails</span>
                </ListItem>
            </List>
            <WorkImage src="../images/works/budgetapp.png" alt="budgetapp" />
        </Layout>
    )
}

export default Work;