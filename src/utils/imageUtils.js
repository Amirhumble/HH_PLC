/**
 * Utility to generate Netlify Image CDN optimized URL
 * @param {string} imageSrc - Image path string or imported asset URL
 * @param {number} [width=800] - Target width in pixels
 * @returns {string} Netlify CDN URL
 */
export const getOptimizedImage = (imageSrc, width = 800) => {
  if (!imageSrc) return '';
  const encodedSrc = encodeURIComponent(imageSrc);
  return `/.netlify/images?url=${encodedSrc}&w=${width}&q=80`;
};

