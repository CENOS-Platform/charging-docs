import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import YouTubeVideo from '@site/src/components/YouTubeVideo';

export default {
    // Re-use the default mapping
    ...MDXComponents,

    YouTubeVideo,
};
