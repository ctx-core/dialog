import { remove } from '@ctx-core/array'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const dialog_stack__ = be_('dialog_stack__', ()=>
	atom_([]))
export function add_dialog_stack_component(ctx, dialog) {
	const dialog_stack = dialog_stack__(ctx).$.slice(0)
	dialog_stack.push(dialog)
	dialog_stack__(ctx).$ = dialog_stack
}
export function remove_dialog_stack_component(ctx, dialog) {
	const dialog_stack = dialog_stack__(ctx).$.slice(0)
	remove(dialog_stack, dialog)
	dialog_stack__(ctx).$ = dialog_stack
}
export function close_dialog_stack(ctx, event) {
	const dialog_stack = dialog_stack__(ctx).$
	for (const $ of dialog_stack) {
		$.close(event)
	}
}
export { dialog_stack__ as dialog_stack$_ }
