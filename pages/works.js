import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import spacehub from "../public/images/works/spacehub.png";
import mealconnect from "../public/images/works/mealconnect.png";
import budgetapp from "../public/images/works/budgetapp.png";
import thumbMathMagicians from "../public/images/works/math-magicians.png";
import thumbTodoList from "../public/images/works/todo-list.png";
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading id="works" as="h3" fontSize={20} mb={4} color="green">
                    My Recent Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="budgetapp" title="Budget App" thumbnail={budgetapp}>
                        The SmartPocket app manages your expenses.
                        You have the ability to make, change, or remove categories and transactions.
                        Each transaction is linked to one or multiple categories.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="math-magicians" title="Math magicians" thumbnail={thumbMathMagicians}>
                        &quot;Math magicians&quot; is a website for all fans of mathematics.
                        It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.
                        Built with React, Linters, CSS3, API
                        Added unit and integration tests with Jest.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="todo-list" title="To-do List" thumbnail={thumbTodoList}>
                        &quot;To-do list&quot; is a tool that helps to organize your day. 
                        A simple website that allows for doing that, and built using ES6 and Webpack!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaboration Projects
                    </Heading>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section delay={0.5}>
                            <WorkGridItem id="spacehub" title="Space Hub" thumbnail={spacehub}>
                                Space Travelers Hub is a web application that provides commercial and scientific space travel services.
                                The application will allow users to book rockets and join selected space missions.
                            </WorkGridItem>
                        </Section>
                        <Section delay={0.6}>
                            <WorkGridItem id="mealconnect" title="Meal Connect" thumbnail={mealconnect}>
                            MealConnect is a vibrant web application designed for those who appreciate the art of cooking and the pleasure of savoring exquisite meals.
                            Dive into a world of flavors, discover new recipes, and make customized reservations based on your taste buds.
                            </WorkGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    );
};

export default Works;