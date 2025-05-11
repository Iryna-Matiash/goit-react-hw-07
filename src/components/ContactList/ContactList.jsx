import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredData = contacts.filter((el) =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredData.map((el) => (
        <li className={css.contact} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  );
}
