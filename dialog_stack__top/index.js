/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { last_ } from 'ctx-core/array'
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { dialog_stack_ } from '../dialog_stack/index.js'
export const [
	dialog_stack__top$_,
	dialog_stack__top_,
] = /** @type {be_memo_pair_T<dialog_stack_top_T>} */
	id_be_memo_pair_(
		'dialog_stack__top',
		ctx=>
			last_(dialog_stack_(ctx)))
export {
	dialog_stack__top$_ as dialog_stack_top__,
	dialog_stack__top$_ as dialog_stack__top__,
}
export function dialog_stack__top__close(ctx, event) {
	const dialog_stack_top = dialog_stack__top_(ctx)
	if (dialog_stack_top) dialog_stack_top.close(event)
}
