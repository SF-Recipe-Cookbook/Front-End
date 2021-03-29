import React from 'react'
import styled from 'styled-components'

const Page = styled.div ``
const Header = styled.div ``
const Heading = styled.h1 ``
const Button = styled.button ``
const RecipeCards = styled.div ``
const Text = styled.p ``

const HomePage = () => {
    return (
        <Page>
            <Header>
                <Heading>Super Top Secret Family Cookbook</Heading>
                <Button> Sign up before your granny starts haunting you</Button>
                <Button>Log in and get to cookin</Button>
            </Header>
            <Text>Here lies all the food your great great great grandma whipped up in the 1800's </Text>
            <RecipeCards></RecipeCards>
        </Page>
    )
}