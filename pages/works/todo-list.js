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
                    To-do list <Badge>2022</Badge>
                </Title>
            </Container>
            <P>
                &quot;To-do list&quot; a simple and efficient task management application. Stay organized and
                productive with this user-friendly interface that allows you to effortlessly create, track, and manage your daily tasks.
                 Built using HTML, CSS, ES6 and Webpack!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://ghostesso.github.io/toDoList/">
                        Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> github </Meta>
                    <Link href="https://github.com/GhostEsso/toDoList">
                    Source Code <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>ES6, Webpack</span>
                </ListItem>
            </List>
            <WorkImage src="../images/works/todo-list.png" alt="to do list" />
        </Layout>
    )
}

export default Work;