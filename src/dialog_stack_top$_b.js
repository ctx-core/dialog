import { be_ } from '@ctx-core/object';
import { _last } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { dialog_stack$_b } from './dialog_stack$_b';
const key = 'dialog_stack_top$';
export const dialog_stack_top$_b = be_(key, ctx => derived$(dialog_stack$_b(ctx), _last));
//# sourceMappingURL=src/dialog_stack_top$_b.js.map