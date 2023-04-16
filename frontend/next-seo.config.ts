const description = "M'adames é uma loja física e online que comercializa produtos focados na vida íntima feminina";
const title = "🟣";
const url = "https://madames.store";

const seo = {
  title,
  titleTemplate: "M'adames | %s",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  }
};

export { seo as defaultSEO, url as defaultUrl };