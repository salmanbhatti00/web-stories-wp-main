/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
import * as StoryAnimation from '../../../components';
import { AnimationType } from '../../../types';
import { AMPStoryWrapper, PlayButton } from '../../../storybookUtils';

export default {
  title: 'Animations/Parts/BlinkOn',
};

const animations = [
  { id: '1', targets: ['e1'], type: AnimationType.BlinkOn, duration: 3000 },
  { id: '2', targets: ['e2'], type: AnimationType.BlinkOn, duration: 3000 },
  { id: '3', targets: ['e3'], type: AnimationType.BlinkOn, duration: 3000 },
  { id: '4', targets: ['e4'], type: AnimationType.BlinkOn, duration: 3000 },
];

const elements = [
  { id: 'e1', color: 'red' },
  { id: 'e2', color: 'orange' },
  { id: 'e3', color: 'blue' },
  { id: 'e4', color: 'green' },
];

export const _default = {
  render: function Render() {
    return (
      <StoryAnimation.AnimationProvider animations={animations}>
        <PlayButton />
        <div
          style={{
            display: 'flex',
            width: '220px',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          {elements.map(({ id, color }) => (
            <div
              key={id}
              style={{ position: 'relative', width: '50px', height: '50px' }}
            >
              <StoryAnimation.WAAPIWrapper target={id}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: color,
                  }}
                />
              </StoryAnimation.WAAPIWrapper>
            </div>
          ))}
        </div>
      </StoryAnimation.AnimationProvider>
    );
  },
};

export const _AMPStory = {
  render: function Render() {
    return (
      <AMPStoryWrapper>
        <amp-story-page id="page-0">
          <p style={{ textAlign: 'center', color: '#fff' }}>
            {'Empty first page'}
          </p>
        </amp-story-page>
        {[1, 2].map((pageId) => (
          <amp-story-page key={pageId} id={`page-${pageId}`}>
            <StoryAnimation.AnimationProvider animations={animations}>
              <StoryAnimation.AMPAnimations />

              <amp-story-grid-layer template="horizontal">
                {elements.map(({ id, color }) => (
                  <div
                    key={id}
                    style={{
                      position: 'relative',
                      width: '50px',
                      height: '50px',
                    }}
                  >
                    <StoryAnimation.AMPWrapper target={id}>
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: color,
                        }}
                      />
                    </StoryAnimation.AMPWrapper>
                  </div>
                ))}
              </amp-story-grid-layer>
            </StoryAnimation.AnimationProvider>
          </amp-story-page>
        ))}
      </AMPStoryWrapper>
    );
  },
};
