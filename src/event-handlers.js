import { normalizeItem } from './item'

const WF = window.WF;

function refreshVisibleDocument(store) {
  const data = normalizeItem(WF.currentItem());
  store.commit('updateWorkflowyState', data);
}

const EVENT_HANDLERS = {
  'document_ready':      refreshVisibleDocument,
  'zoomedIn':            refreshVisibleDocument,
  'zoomedOut':           refreshVisibleDocument,
  // 'zoom--in':            refreshVisibleDocument,
  // 'zoom--out':           refreshVisibleDocument,
  // 'expand':              onExpand,
  // 'collapse':            onCollapse,
  // 'edit':                onEdit,
  // 'bullet-menu--opened': onBulletMenuOpened,
  // 'bullet-menu--closed': onBulletMenuClosed
}

export default function handleEvent(eventName, store) {
  if (EVENT_HANDLERS[eventName]) {
    EVENT_HANDLERS[eventName](store);
  }
}