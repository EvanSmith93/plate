import type { SidebarNavItem } from '@/types/nav';

import {
  AlignCenterIcon,
  ArrowDownToLineIcon,
  ArrowRightToLineIcon,
  AtSignIcon,
  AudioLinesIcon,
  BellIcon,
  BoldIcon,
  BoxIcon,
  BrickWallIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CaptionsIcon,
  CheckSquareIcon,
  ChevronRightSquareIcon,
  ChevronsUpDownIcon,
  CircleGaugeIcon,
  CodeIcon,
  CodeXmlIcon,
  Columns3Icon,
  ColumnsIcon,
  CommandIcon,
  CornerDownLeftIcon,
  DockIcon,
  Edit3Icon,
  EllipsisIcon,
  EyeIcon,
  FileCodeIcon,
  FileIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FilesIcon,
  FilmIcon,
  FrameIcon,
  GridIcon,
  GripVerticalIcon,
  HandIcon,
  HashIcon,
  Heading1Icon,
  HelpCircleIcon,
  HighlighterIcon,
  HistoryIcon,
  ImageIcon,
  IndentIcon,
  KeyboardIcon,
  LayersIcon,
  LightbulbIcon,
  LinkIcon,
  ListIcon,
  ListTodoIcon,
  LoaderCircleIcon,
  LogOutIcon,
  MenuIcon,
  MessageSquareIcon,
  MessageSquareTextIcon,
  MinusIcon,
  MonitorIcon,
  MousePointerClickIcon,
  MoveVerticalIcon,
  OutdentIcon,
  PaintRollerIcon,
  PaletteIcon,
  PanelTopIcon,
  PencilRulerIcon,
  PercentIcon,
  PilcrowIcon,
  PlusSquareIcon,
  ProportionsIcon,
  QuoteIcon,
  RadicalIcon,
  RectangleEllipsisIcon,
  RectangleHorizontalIcon,
  ReplaceIcon,
  RotateCcwIcon,
  RowsIcon,
  SeparatorHorizontalIcon,
  ServerIcon,
  SlashIcon,
  SmileIcon,
  SparklesIcon,
  SplitSquareVerticalIcon,
  SquareDashedIcon,
  SquareIcon,
  SquareMIcon,
  SquareMinusIcon,
  SquareMousePointerIcon,
  SquareStackIcon,
  TableIcon,
  TableOfContentsIcon,
  TagIcon,
  TagsIcon,
  TextCursorIcon,
  TextCursorInputIcon,
  TextSearchIcon,
  UploadIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react';

export const DocIcons = {
  ai: SparklesIcon,
  'ai-leaf': SparklesIcon,
  'ai-menu': SparklesIcon,
  'ai-toolbar-button': SparklesIcon,
  'alert-dialog': SquareStackIcon,
  align: AlignCenterIcon,
  'align-dropdown-menu': AlignCenterIcon,
  alignment: AlignCenterIcon,
  autoformat: PercentIcon,
  avatar: UserIcon,
  'basic-editor-default': KeyboardIcon,
  'basic-editor-handler': HandIcon,
  'basic-editor-styling': PaletteIcon,
  'basic-editor-value': FilesIcon,
  'basic-elements': Heading1Icon,
  'basic-marks': BoldIcon,
  'basic-nodes': Heading1Icon,
  'basic-plugins-components': MonitorIcon,
  'basic-plugins-default': LayersIcon,
  'block-context-menu': MenuIcon,
  'block-menu': MenuIcon,
  'block-selection': SquareMousePointerIcon,
  'blockquote-element': QuoteIcon,
  button: SquareMinusIcon,
  calendar: CalendarDaysIcon,
  callout: LightbulbIcon,
  caption: CaptionsIcon,
  checkbox: CheckSquareIcon,
  'code-block-element': FileCodeIcon,
  'code-leaf': CodeIcon,
  'code-line-element': FileCodeIcon,
  'code-syntax-leaf': FileCodeIcon,
  collaboration: UsersIcon,
  'color-dropdown-menu': PaintRollerIcon,
  column: Columns3Icon,
  'column-element': ColumnsIcon,
  'column-group-element': ColumnsIcon,
  combobox: SlashIcon,
  command: CommandIcon,
  'comment-leaf': MessageSquareTextIcon,
  'comment-toolbar-button': MessageSquareTextIcon,
  comments: MessageSquareTextIcon,
  'comments-popover': MessageSquareTextIcon,
  'context-menu': MousePointerClickIcon,
  copilot: ArrowRightToLineIcon,
  csv: FileSpreadsheetIcon,
  'cursor-overlay': TextCursorInputIcon,
  date: CalendarIcon,
  'date-element': CalendarIcon,
  default: CodeXmlIcon,
  dialog: SquareStackIcon,
  dnd: GripVerticalIcon,
  docx: FileTextIcon,
  draggable: GripVerticalIcon,
  'dropdown-menu': ChevronsUpDownIcon,
  'editable-voids': Edit3Icon,
  editor: FileTextIcon,
  emoji: SmileIcon,
  'emoji-dropdown-menu': SmileIcon,
  'emoji-input-element': SmileIcon,
  equation: RadicalIcon,
  excalidraw: PencilRulerIcon,
  'excalidraw-element': PencilRulerIcon,
  'exit-break': LogOutIcon,
  'find-replace': TextSearchIcon,
  'fixed-toolbar': PanelTopIcon,
  'fixed-toolbar-buttons': PanelTopIcon,
  'floating-toolbar': RectangleEllipsisIcon,
  'floating-toolbar-buttons': RectangleEllipsisIcon,
  font: PaintRollerIcon,
  'forced-layout': BrickWallIcon,
  'ghost-text': ArrowRightToLineIcon,
  'ghost-text-element': ArrowRightToLineIcon,
  'heading-element': Heading1Icon,
  highlight: HighlighterIcon,
  'highlight-leaf': HighlighterIcon,
  'history-toolbar-button': HistoryIcon,
  'horizontal-rule': MinusIcon,
  'hr-element': MinusIcon,
  html: FileCodeIcon,
  'hundreds-blocks': CircleGaugeIcon,
  'hundreds-editors': CircleGaugeIcon,
  iframe: FrameIcon,
  'image-element': ImageIcon,
  'image-preview': ImageIcon,
  indent: IndentIcon,
  'indent-list': ListIcon,
  'indent-list-toolbar-button': ListIcon,
  'indent-todo-marker': ListTodoIcon,
  'indent-todo-toolbar-button': ListTodoIcon,
  'indent-toolbar-button': ListIcon,
  'inline-combobox': SlashIcon,
  input: RectangleHorizontalIcon,
  'insert-dropdown-menu': PlusSquareIcon,
  kbd: KeyboardIcon,
  'kbd-leaf': KeyboardIcon,
  'line-height': MoveVerticalIcon,
  'line-height-dropdown-menu': MoveVerticalIcon,
  link: LinkIcon,
  'link-element': LinkIcon,
  'link-floating-toolbar': LinkIcon,
  'link-toolbar-button': LinkIcon,
  list: ListIcon,
  'list-element': ListIcon,
  'list-indent-toolbar-button': IndentIcon,
  'list-toolbar-button': ListIcon,
  'mark-toolbar-button': BoldIcon,
  markdown: SquareMIcon,
  'markdown-to-slate': SquareMIcon,
  media: ImageIcon,
  'media-audio-element': AudioLinesIcon,
  'media-embed-element': DockIcon,
  'media-file-element': FileIcon,
  'media-placeholder-element': SquareDashedIcon,
  'media-popover': ImageIcon,
  'media-toolbar-button': ImageIcon,
  'media-upload-toast': BellIcon,
  'media-video-element': FilmIcon,
  mention: AtSignIcon,
  'mention-element': AtSignIcon,
  'mention-input-element': AtSignIcon,
  'mode-dropdown-menu': EyeIcon,
  'more-dropdown-menu': EllipsisIcon,
  'multiple-editors': SplitSquareVerticalIcon,
  'node-id': HashIcon,
  'outdent-toolbar-button': OutdentIcon,
  'paragraph-element': PilcrowIcon,
  placeholder: TextCursorIcon,
  'plate-element': BoxIcon,
  playground: FileCodeIcon,
  popover: MessageSquareIcon,
  'preview-markdown': SquareMIcon,
  'reset-node': RotateCcwIcon,
  resizable: ProportionsIcon,
  'search-highlight-leaf': HighlighterIcon,
  select: KeyboardIcon,
  'select-editor': TagsIcon,
  separator: SeparatorHorizontalIcon,
  'server-side': ServerIcon,
  'single-line': RectangleHorizontalIcon,
  'slash-command': SlashIcon,
  'slash-input-element': SlashIcon,
  'soft-break': CornerDownLeftIcon,
  spinner: LoaderCircleIcon,
  tabbable: ArrowRightToLineIcon,
  table: TableIcon,
  'table-cell-element': SquareIcon,
  'table-dropdown-menu': TableIcon,
  'table-element': GridIcon,
  'table-row-element': RowsIcon,
  'tag-element': TagIcon,
  toc: TableOfContentsIcon,
  'toc-element': TableOfContentsIcon,
  'todo-list-element': ListTodoIcon,
  toggle: ChevronRightSquareIcon,
  'toggle-element': ChevronRightSquareIcon,
  'toggle-toolbar-button': ChevronRightSquareIcon,
  toolbar: PanelTopIcon,
  tooltip: HelpCircleIcon,
  'trailing-block': ArrowDownToLineIcon,
  'turn-into-dropdown-menu': ReplaceIcon,
  upload: UploadIcon,
  'version-history': HistoryIcon,
};

export const getDocIcon = (item: SidebarNavItem, category?: string) => {
  if (category === 'guide') return null;

  const icon = item.icon ?? item.href?.split('/').pop();

  return (DocIcons as any)[icon!] ?? (category === 'api' ? CodeXmlIcon : null);
};
