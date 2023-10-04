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
 * External dependencies
 */
import { StoryContext } from '@googleforcreators/story-editor';

/**
 * Internal dependencies
 */
import PostPublishDialog from '..';

export default {
  title: 'Stories Editor/Components/Dialog/Post-Publish',
  component: PostPublishDialog,
};

const storyContext = {
  state: {
    story: {
      embedPostLink:
        'https://example.com/wp-admin/post-new.php?from-web-story=123',
      link: '',
    },
    meta: {
      isFreshlyPublished: true,
    },
  },
};

export const _default = {
  render: function Render() {
    return (
      <StoryContext.Provider value={storyContext}>
        <PostPublishDialog />
      </StoryContext.Provider>
    );
  },
};
