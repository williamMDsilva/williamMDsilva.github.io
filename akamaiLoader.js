// Docs: https://techdocs.akamai.com/ivm/reference/test-images-on-demand
export default function akamaiLoader({ src, width, quality }) {
  return `https://williammdsilva.github.io/${src}?imwidth=${width}`;
}
