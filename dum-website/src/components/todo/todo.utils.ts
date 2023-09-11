import { TODOItem } from "./todo.types";

export async function getTODOItems(): Promise<TODOItem[]> {
  const response = await fetch('http://localhost:3001/todo', { mode: "cors" });
  if (response.ok) {
    return (await response.json()).items;
  }
  return [];
}

export function addTODOItem(value: string, callback: Function) {
  callback((items: TODOItem[]) => {
    const index = (items.at(-1)?.id || 0) + 1;
    const todo_item = { id: index, name: value, completed: false, deleted: false } satisfies TODOItem;
    fetch('http://localhost:3001/todo', { method: "POST", body: JSON.stringify({ items: items.concat(todo_item) }) });
    return items.concat(todo_item);
  });
}

export function removeTODOItem(index: number, callback: Function) {
  callback((items: TODOItem[]) => {
    const updated = items.map((item) => { if (item.id === index) { item.deleted = true }; return item; });
    fetch('http://localhost:3001/todo', { method: "POST", body: JSON.stringify({ items: updated }) });
    return updated;
  });
}