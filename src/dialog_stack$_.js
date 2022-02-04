import { remove } from '@ctx-core/array'
import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'dialog_stack$'
export const dialog_stack$_ = be_(key, ()=>
	atom$([]))
export function add_dialog_stack_component(ctx, dialog) {
	const dialog_stack = dialog_stack$_(ctx).$.slice(0)
	dialog_stack.push(dialog)
	dialog_stack$_(ctx).$ = dialog_stack
}
export function remove_dialog_stack_component(ctx, dialog) {
	const dialog_stack = dialog_stack$_(ctx).$.slice(0)
	remove(dialog_stack, dialog)
	dialog_stack$_(ctx).$ = dialog_stack
}
export function close_dialog_stack(ctx, event) {
	const dialog_stack = dialog_stack$_(ctx).$
	for (const $ of dialog_stack) {
		$.close(event)
	}
}
