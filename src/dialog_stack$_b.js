import { be_, assign } from '@ctx-core/object';
import { each, remove } from '@ctx-core/array';
import { writable$ } from '@ctx-core/store';
const key = 'dialog_stack$';
export const dialog_stack$_b = be_(key, () => {
    const dialog_stack$ = writable$([]);
    return assign(dialog_stack$, {
        add_dialog_stack_component,
        remove_dialog_stack_component,
        close_dialog_stack,
    });
    function add_dialog_stack_component(dialog) {
        const dialog_stack = dialog_stack$._.slice(0);
        dialog_stack.push(dialog);
        dialog_stack$._ = dialog_stack;
    }
    function remove_dialog_stack_component(dialog) {
        const dialog_stack = dialog_stack$._.slice(0);
        remove(dialog_stack, dialog);
        dialog_stack$._ = dialog_stack;
    }
    function close_dialog_stack(event) {
        const dialog_stack = dialog_stack$._;
        each(dialog_stack, dialog => dialog.close(event));
    }
});
//# sourceMappingURL=src/dialog_stack$_b.js.map