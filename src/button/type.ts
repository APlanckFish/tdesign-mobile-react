/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2022-01-07 16:30:49
 * */

import { TNode, TElement, SizeEnum } from '../common';
import { MouseEvent } from 'react';

export interface TdButtonProps {
  /**
   * 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 按钮内容，同 content
   */
  children?: TNode;
  /**
   * 按钮内容
   */
  content?: TNode;
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost?: boolean;
  /**
   * 按钮内部图标，可完全自定义
   */
  icon?: TElement;
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 按钮形状，有二种：方形、圆角方形
   * @default square
   */
  shape?: 'square' | 'round';
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 组件风格，依次为品牌色、危险色
   * @default default
   */
  theme?: 'default' | 'primary' | 'danger';
  /**
   * 按钮类型
   * @default button
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * 按钮形式，基础、线框、文字
   * @default base
   */
  variant?: 'base' | 'outline' | 'text';
  /**
   * 点击时触发
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
