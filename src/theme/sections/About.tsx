import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { SECTION } from '../utils/constants';
import { about } from '../../content/AboutContent';
import { AboutSubSection } from '../types';

const About = (): JSX.Element => {
  const { subSections } = about;

  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} />

      {subSections.map(({ markdown, logo }) => (
        <SubSection markdown={markdown} logo={logo} />
      ))}
    </Section.Container>
  );
};

const SubSection = ({ markdown, logo }: AboutSubSection): JSX.Element => (
  <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
    <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
      <Fade direction="down" triggerOnce>
        <ReactMarkdown source={markdown} renderers={markdownRenderer} />
      </Fade>
    </Box>
    <Box width={[1, 1, 2 / 6]} style={{ maxWidth: '300px', margin: 'auto' }}>
      <Fade direction="right" triggerOnce style={{ textAlign: 'center' }}>
        <Image
          width={[2 / 6, 2 / 6, 1]}
          mt={[4, 4, 0]}
          ml={[0, 0, 1]}
          {...logo}
        />
      </Fade>
    </Box>{' '}
  </Flex>
);

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
