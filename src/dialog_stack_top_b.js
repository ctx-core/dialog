import { _b } from '@ctx-core/object';
import { _last } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { dialog_stack_b } from './dialog_stack_b';
const key = 'dialog_stack_top';
export const dialog_stack_top_b = _b(key, ctx => derived$(dialog_stack_b(ctx), _last));
