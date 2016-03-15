// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#ff8940',
  secondary: '#ffb740',
  tertiary: 'white',
  quarternary: '#29A489',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>

          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JupyterHub
            </Heading>
            <Heading size={1} fit caps>
              On Carina
            </Heading>
            <Heading size={2} fit caps textColor="black">
              at JupyterDays Boston 2015
            </Heading>
            <Link href="https://github.com/getcarina/jupyterhub-boston-2015">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide transition={['spin', 'zoom']} bgColor="white">
            <Heading caps fit size={1} textColor="black">
              Instructors
            </Heading>
            <Markdown>
              {`
[@rgbkrk](https://github.com/rgbkrk) - Kyle Kelley

[@smashwilson](https://github.com/smashwilson) - Ash Wilson
              `}
            </Markdown>
          </Slide>

          <Slide transition={['spin']} bgColor="primary" textColor="tertiary">
            <Heading size={2} textColor="tertiary">
              Goals
            </Heading>
            <List>
              <ListItem>Learn Docker Swarm Fundamentals</ListItem>
              <ListItem>Deploy JupyterHub to Swarm via <Link bold textColor="tertiary" href="https://getcarina.com">Carina</Link></ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
