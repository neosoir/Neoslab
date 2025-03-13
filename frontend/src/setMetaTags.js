const setMetaTags = () => {
  const baseUrl = import.meta.env.VITE_APP_URL;

  const metaUrl = document.createElement('meta');
  metaUrl.setAttribute('property', 'og:url');
  metaUrl.setAttribute('content', baseUrl);
  document.head.appendChild(metaUrl);
};

setMetaTags();