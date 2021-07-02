import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { SECTION } from '../utils/constants';
import { abouts } from '../../content/AboutContent';

const About = (): JSX.Element => {
  // TODO generalize the abouts lookup
  // alternate image on right or left depending on the loop index
  // we may create a component to avoid duplication
  const about1 = abouts[0];
  const about2 = abouts[1];
  const about3 = abouts[2];

  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown
              source={about1.markdown}
              renderers={markdownRenderer}
            />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
            <Image
              width={[2 / 6, 2 / 6, 1]}
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              {...about1.image}
            />
          </Fade>
        </Box>
      </Flex>

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
            <Image
              width={[2 / 6, 2 / 6, 1]}
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              {...about2.image}
            />
          </Fade>
        </Box>
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown
              source={about2.markdown}
              renderers={markdownRenderer}
            />
          </Fade>
        </Box>
      </Flex>

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown
              source={about3.markdown}
              renderers={markdownRenderer}
            />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
            <Image
              width={[2 / 6, 2 / 6, 1]}
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              {...about3.image}
            />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const Background = (): JSX.Element => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

export default About;
