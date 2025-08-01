/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
/* eslint-disable @typescript-eslint/naming-convention */

/** 每一级树缩进宽度 */
export const TreeIndentWidth = 15;
/** 树节点展开收起按钮宽度 */
export const TreeCollapseWidth = 10;

export enum ChangeMode {
  Update,
  Delete,
  Append,
  DeleteChildren,
}
export const MAX_TREE_LEVEL = 3;
