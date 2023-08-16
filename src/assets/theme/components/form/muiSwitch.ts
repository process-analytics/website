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
 * Material Kit 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import { Components, Theme } from '@mui/material';

import { borders, boxShadows, linearGradient } from '../..';

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark,

      '&:hover': {
        backgroundColor: 'transparent',
      },

      '&.Mui-checked': {
        color: gradients.dark,

        '&:hover': {
          backgroundColor: 'transparent',
        },

        '& .MuiSwitch-thumb': {
          borderColor: `${gradients.dark} !important`,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: `${gradients.dark} !important`,
          borderColor: `${gradients.dark} !important`,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.3 !important',
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
        backgroundImage: linearGradient(
          gradients.info.main,
          gradients.info.state,
        ),
      },
    },

    thumb: ({ theme: { palette } }) => ({
      backgroundColor: 'white',
      boxShadow: boxShadows.md,
      border: `${borders.width.sm} solid ${palette.grey[400]}`,
    }),

    track: ({ theme: { palette } }) => ({
      width: '2rem',
      height: '0.9375rem',
      backgroundColor: palette.grey[400],
      border: `${borders.width.sm} solid ${palette.grey[400]}`,
      opacity: 1,
    }),

    checked: {},
  },
};
