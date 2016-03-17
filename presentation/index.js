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

          <Slide>
            <Heading caps fit size={1}>Setup</Heading>
          </Slide>

          <Slide textColor="tertiary">
            <Heading size={3} textColor="tertiary">Log In</Heading>
            <Text textColor="tertiary">Log in to the Carina GUI.</Text>
            <List>
              <ListItem><Link bold textColor="secondary" href="https://getcarina.com/" target="_blank">Create an account at getcarina.com</Link></ListItem>
              <ListItem>Log in at <Link textColor="secondary" href="https://app.getcarina.com/" target="_blank">app.getcarina.com</Link></ListItem>
              <ListItem>Don't create a cluster just yet</ListItem>
              <ListItem>Get your API Key under your username in the top right corner</ListItem>
              <ListItem>Note: People without a Rackspace account do not need to use a credit card</ListItem>
            </List>
          </Slide>

          <Slide>
            <h3>Installation</h3>
            <ol>
              <li><a href="https://git-scm.com/downloads" target="_blank">Git</a></li>
              <li>Docker Version Manager</li>
              <ol>
                <li>Utility for managing Docker client versions</li>
                <li><a href="https://getcarina.com/docs/tutorials/docker-version-manager/" target="_blank">Manage Docker client versions with dvm</a></li>
                <li>Do the <b>Install dvm</b> section only</li>
                <li><code>dvm install 1.10.1</code></li>
              </ol>
              <li>Carina CLI</li>
              <ol>
                <li>The CLI for the Caria API</li>
                <li><a href="https://getcarina.com/docs/getting-started/getting-started-carina-cli/" target="_blank">Getting started with the Carina CLI</a></li>
                <li>Do the <b>Download and install the CLI</b> and <b>Configure with Carina credentials</b> sections only</li>
                <li><code>carina ls</code></li>
              </ol>
            </ol>
          </Slide>

          <Slide>
            <h3>Site Overview</h3>
            <p>Get a feel for the Carina website.</p>
            <ul>
              <li><a href="https://getcarina.com/" target="_blank">Carina</a></li>
              <li>Documentation</li>
                <ul>
                  <li>Note the Edit on GitHub links on every page</li>
                </ul>
              <li>Community</li>
                <ul>
                  <li>Use your Rackspace public cloud username/password</li>
                </ul>
              <li>Blog</li>
                <ul>
                  <li>Subscribe via RSS</li>
                </ul>
            </ul>
          </Slide>

          <Slide>
            <h3>Add a Cluster</h3>
            <p>Setup a cluster where we can run Docker containers</p>
            <ul>
              <li><a href="https://app.getcarina.com/" target="_blank">Log In</a></li>
              <li>Add Cluster</li>
                <ul>
                  <li>Cluster Name: mycluster</li>
                  <li>Enable Autoscale: unchecked</li>
                </ul>
              <li>Get Access</li>
                <ul>
                  <li>Download File</li>
                  <li>Unzip</li>
                  <li>List files</li>
                </ul>
            </ul>
            <aside>
              This is the last time we touch the GUI. Everything is on the
              command line from here on out.
            </aside>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
