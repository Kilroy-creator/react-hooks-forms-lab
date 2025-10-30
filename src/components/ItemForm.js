import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // ✅ Controlled inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuidv4(), // ✅ unique id that works in tests
      name,
      category,
    };

    // ✅ Pass new item to parent
    onItemFormSubmit(newItem);

    // ✅ Reset form after submission
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="item-name">Name:</label>
      <input
        id="item-name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="item-category">Category:</label>
      <select
        id="item-category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
