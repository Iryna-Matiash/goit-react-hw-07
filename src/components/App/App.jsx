import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
//import { useState, useEffect } from "react";

export default function App() {
  // const [data, setData] = useState(() => {
  //   const savedData = JSON.parse(window.localStorage.getItem("savedData"));

  //   return savedData ? savedData : İnitialData;
  // });

  //const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("savedData", JSON.stringify(data));
  // }, [data]);

  // const addData = (values) => {
  //   const newData = {
  //     name: values.name,
  //     number: values.number,
  //     id: nanoid(),
  //   };

  //   setData((prevData) => {
  //     return [...prevData, newData];
  //   });
  // };

  // const deleteData = (dataİd) => {
  //   setData((prevData) => {
  //     return prevData.filter((data) => data.id !== dataİd);
  //   });
  // };

  // const filteredData = data.filter((el) =>
  //   el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
