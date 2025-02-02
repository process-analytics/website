/**
 * Copyright 2023 Bonitasoft S.A.
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

/**
 =========================================================
 * Material Kit 2 React - v2.0.0
 =========================================================
 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 Coded by www.creative-tim.com
 =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import type {JSX} from 'react';
import React from 'react';

import type { Theme } from '@mui/material';

import { borders } from '../../../../assets/theme';

import type { HoverStyle } from '../common/HoverStyle';
import { getHoverConfiguration } from '../common/HoverStyle';

import { MKBox, MKTypography } from '../..';
import type { LinkContent } from '../../..';
import { Link } from '../../..';

type DropdownLinkProps = {
  id: number;
  content: LinkContent;
  hoverStyle: HoverStyle;
};
export const DropdownLink = ({
  content: { name, description, type, url },
  id,
  hoverStyle,
}: DropdownLinkProps): JSX.Element => (
  <Link
    component={MKBox}
    type={type}
    url={url}
    key={`${name}_${id}`}
    display="block"
    sx={({ palette }: Theme) => ({
      borderRadius: borders.radius.md,
      cursor: 'pointer',
      transition: 'all 300ms linear',
      py: 1,
      px: 1.625,
      ...getHoverConfiguration(palette, hoverStyle),
    })}
  >
    <MKTypography
      display="block"
      variant="button"
      fontWeight="bold"
      textTransform="capitalize"
    >
      {name}
    </MKTypography>

    <MKTypography
      display="block"
      variant="button"
      fontWeight="regular"
      sx={{ transition: 'all 300ms linear' }}
    >
      {description}
    </MKTypography>
  </Link>
);
