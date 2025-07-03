// replace our localhost address with a public address
export const replaceUrls = (content: string, replacementUrl: string) => {
    return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};