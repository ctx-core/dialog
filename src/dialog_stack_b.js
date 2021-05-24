import { _b, assign } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
import { each, remove } from '@ctx-core/array';
const key = 'dialog_stack';
export const dialog_stack_b = _b(key, () => {
    const dialog_stack = writable$([]);
    return assign(dialog_stack, {
        add_dialog_stack_component,
        remove_dialog_stack_component,
        close_dialog_stack,
    });
    function add_dialog_stack_component(dialog) {
        const $dialog_stack = dialog_stack.$.slice(0);
        $dialog_stack.push(dialog);
        dialog_stack.set($dialog_stack);
    }
    function remove_dialog_stack_component(dialog) {
        const $dialog_stack = dialog_stack.$.slice(0);
        remove($dialog_stack, dialog);
        dialog_stack.set($dialog_stack);
    }
    function close_dialog_stack(event) {
        const $dialog_stack = dialog_stack.$;
        each($dialog_stack, dialog => dialog.close(event));
    }
});
