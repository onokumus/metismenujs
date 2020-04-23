import { IMMOptions } from './interface';

export type MetisMenuEvents =
  | 'show.metisMenu'
  | 'shown.metisMenu'
  | 'hide.metisMenu'
  | 'hidden.metisMenu';

export const Default: IMMOptions = {
  parentTrigger: 'li',
  subMenu: 'ul',
  toggle: true,
  triggerElement: 'a',
};

export const ClassName = {
  ACTIVE: 'mm-active',
  COLLAPSE: 'mm-collapse',
  COLLAPSED: 'mm-collapsed',
  COLLAPSING: 'mm-collapsing',
  METIS: 'metismenu',
  SHOW: 'mm-show',
};
