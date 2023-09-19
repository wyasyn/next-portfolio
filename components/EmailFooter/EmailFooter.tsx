import {  
    Html,
    Body,
    Head,
    Heading,
    Container,
    Preview,
    Section,
    Text
 } from "@react-email/components";
 import { Tailwind } from "@react-email/tailwind";


type FormEmailProps = {
    message: string
}

export default function Email( {message}: FormEmailProps ) {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading>
                            You have received a new message from the footer form.
                        </Heading>
                        <Text>{message}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
