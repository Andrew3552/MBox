export default function FooterList({ children }) {
  return (
    <li className="footer__list_item">
      <a className="footer__list_item_link"  href="#">{children}</a>
    </li>
  );
}
