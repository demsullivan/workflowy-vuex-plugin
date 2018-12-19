const WF = window.WF;

export function normalizeItem(item) {
  return {
    id: item.getId(),
    name: item.getName(),
    plainTextName: item.getNameInPlainText(),
    note: item.getNote(),
    plainTextNote: item.getNoteInPlainText(),
    completed: item.isCompleted(),
    itemTags: WF.getItemNameTags(item),
    noteTags: WF.getItemNoteTags(item),
    el: WF.getItemDOMElement(item),
    _item: item
  }
}