// Component docs https://elf.int.refinitiv.com/elements/tree-select.html
import { Phrasebook } from '../../';
import './shared';
import comboboxTranslations from './combo-box';

const translations = {
  ...comboboxTranslations,

  // used as a toggle control
  FULL_LIST: '全部列表',
  SELECTED: '已选项列表',
  EXPAND_COLLAPSE: '{expansion, select, false {全部展开} true {全部收起}}',
  SELECT_CONTROL: '{selected, select, false {全选} true {取消全选}}',
  // button control
  DONE: '完成',
  // selection/filter feedback
  SELECTED_NUM: '{numSelected, plural, =0 {} =1 {已选 1 项。} other {已选 # 项。}}',
  MATCHES_NUM: '{numMatched, plural, =0 {未找到结果。} =1 {找到了 1 个结果。} other {找到了 # 个结果。}}'
};

Phrasebook.define('zh', 'ef-tree-select', translations);

export default translations;
