/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { remove } from 'ctx-core/array'
import { be_sig_triple_ } from 'ctx-core/rmemo'
/** @typedef {ctx_T} */
/** @typedef {dialog_T} */
export const [
	dialog_stack$_,
	dialog_stack_,
	dialog_stack__set
] = /** @type {be_sig_triple_T<dialog_T[]>} */
	be_sig_triple_(()=>
		[],
	{ id: 'dialog_stack' })
export { dialog_stack$_ as dialog_stack__ }
/**
 * @params {ctx_T}ctx
 * @param {dialog_T}dialog
 */
export function dialog_stack__component__add(ctx, dialog) {
	const dialog_stack = dialog_stack_(ctx).slice(0)
	dialog_stack.push(dialog)
	dialog_stack__set(ctx, dialog_stack)
}
export {
	dialog_stack__component__add as add_dialog_stack_component,
}
/**
 * @params {ctx_T}ctx
 * @param {dialog_T}dialog
 */
export function dialog_stack__component__remove(ctx, dialog) {
	const dialog_stack = dialog_stack_(ctx).slice(0)
	remove(dialog_stack, dialog)
	dialog_stack__set(ctx, dialog_stack)
}
export {
	dialog_stack__component__remove as remove_dialog_stack_component,
}
/**
 * @params {ctx_T}ctx
 * @param {Event}event
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
