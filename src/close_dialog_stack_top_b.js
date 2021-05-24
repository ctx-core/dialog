import { _b } from '@ctx-core/object';
import { get } from '@ctx-core/store';
import { dialog_stack_top_b } from './dialog_stack_top_b';
const key = 'close_dialog_stack_top';
export const close_dialog_stack_top_b = _b(key, ctx => {
    return close_dialog_stack_top;
    function close_dialog_stack_top(event) {
        const $dialog_stack_top = get(dialog_stack_top_b(ctx));
        if ($dialog_stack_top)
            $dialog_stack_top.close(event);
    }
});
