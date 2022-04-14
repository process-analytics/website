/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
<<<<<<< HEAD:src/pages/news.tsx

import { HeadProps } from 'gatsby';

import { DataProps } from '../hooks';
import { SEO, PageWithPosts } from '../components';
import { footerContent, headerContent, newsContent } from '../content';
import { PAGE, SECTION } from '../helper';
=======
import { DataProps } from '../../src/hooks/use-site-metadata';
import { SEO } from '../../src/components/seo';
import { PAGE, SECTION } from 'old/src/theme/utils/constants';
import { newsContent } from 'old/src/content/NewsContent';
import { PageWithPosts } from 'old/src/theme/pages/PageWithPosts';
>>>>>>> ffd0b73c (Move old theme in another folder):old/src/pages/news.tsx

const NewsPage = (): JSX.Element => (
  <PageWithPosts
    containerTitle={SECTION.news}
    description={newsContent.description}
    postContents={newsContent.news}
    headerContent={headerContent}
    footerContent={footerContent}
  />
);
export default NewsPage;

/*
 * You can only define the Head export inside a page, not in a component.
 * Valid tags inside the Head function are: link, meta, style, title, base, script, and noscript.
 * See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ location }: HeadProps<DataProps>): JSX.Element => (
  <SEO title={PAGE.news} pathname={location.pathname} />
);
