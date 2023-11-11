import { remove } from '@ctx-core/array'
import { val__be_atom_triple_ } from '@ctx-core/nanostores'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types/index.d.ts').dialog_T}dialog_T */
/** @type {typeof import('./index.d.ts').dialog_stack__} */
export const [
	dialog_stack$_,
	dialog_stack_,
	dialog_stack__set
] = val__be_atom_triple_('dialog_stack', ()=>[])
export { dialog_stack$_ as dialog_stack__ }
/**
 * @param ctx{Ctx}
 * @param dialog{dialog_T}
 */
export function dialog_stack__component__add(ctx, dialog) {
	const dialog_stack = dialog_stack__(ctx).$.slice(0)
	dialog_stack.push(dialog)
	dialog_stack__set(ctx, dialog_stack)
}
export {
	dialog_stack__component__add as add_dialog_stack_component,
}
/**
 * @param ctx{Ctx}
 * @param dialog{dialog_T}
 */
export function dialog_stack__component__remove(ctx, dialog) {
	const dialog_stack = dialog_stack__(ctx).$.slice(0)
	remove(dialog_stack, dialog)
	dialog_stack__set(ctx, dialog_stack)
}
export {
	dialog_stack__component__remove as remove_dialog_stack_component,
}
/**
 * @param ctx{Ctx}
 * @param event{Event}
 */
export function dialog_stack__close(ctx, event) {
	const dialog_stack = dialog_stack_(ctx)
	for (const $ of dialog_stack) {
		$.close(event)
	}
}
export {
	dialog_stack__close as close_dialog_stack,
}
