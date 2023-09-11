import React from "react";
import { addTODOItem, getTODOItems, removeTODOItem } from "./todo.utils";
import { TODOItem } from "./todo.types";
import styles from './todo.module.css';

export default function TODOList() {
  const input = React.useRef<HTMLInputElement>(null);
  const [items, setItems] = React.useState<TODOItem[]>([])

  React.useEffect(() => {
    getTODOItems().then(value => setItems(value));
  }, []);

  function handleAdd() {
    if (!input.current?.value) return;

    addTODOItem(input.current.value, setItems);
    restoreInputValue();
  }

  function restoreInputValue() {
    if (!input.current) return;
    input.current.value = '';
    input.current.focus();
  }
  function getActiveItems() {
    return items?.filter(item => !item.deleted);
  }

  function handleKey(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.code !== 'Enter') return;
    handleAdd();
  }
  function handleRemove(id: number): void {
    removeTODOItem(id, setItems);
  }
  function handleKeyRemove(id: number, event?: React.KeyboardEvent<HTMLButtonElement>) {
    if (!event || !['Enter', 'Space'].includes(event.code)) return;
    handleRemove(id);
  }
  return <div className={styles.list}>
    <ul>
      {getActiveItems().map(item => (
        <li key={item.id}>
          {item.name}
          <button tabIndex={1} onClick={() => handleRemove(item.id)} onKeyDown={(event) => handleKeyRemove(item.id, event)}>del</button>
        </li>
      ))}
    </ul>
    <div className={styles.actions}>
      <input type="text" placeholder="add..." ref={input} onKeyDown={handleKey} />
      <button onClick={handleAdd}>Add new</button>
    </div>
  </div>
}