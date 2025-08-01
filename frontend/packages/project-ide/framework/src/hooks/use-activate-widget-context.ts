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
 
import {
  useCurrentWidgetFromArea,
  LayoutPanelType,
} from '@coze-project-ide/client';

import { type ProjectIDEWidget } from '@/widgets/project-ide-widget';
import { type WidgetContext } from '@/context/widget-context';

/**
 * 用于提供当前 focus 的 widget 上下文
 */
export const useActivateWidgetContext = (): WidgetContext => {
  const currentWidget = useCurrentWidgetFromArea(LayoutPanelType.MAIN_PANEL);
  return (currentWidget as ProjectIDEWidget)?.context;
};
