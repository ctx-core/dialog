import { last_ } from '@ctx-core/array'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { dialog_stack_ } from '../dialog_stack/index.js'
/** @typedef {import('@ctx-core/object').be_atom_triple_T} */
/** @type {typeof import('./index.d.ts').dialog_stack__top__} */
export const [
	dialog_stack__top$_,
	dialog_stack__top_,
] = /** @type {be_computed_pair_T<dialog_stack_top_T>} */be_computed_pair_(ctx=>
	last_(dialog_stack_(ctx)))
export {
	dialog_stack__top$_ as dialog_stack_top__,
	dialog_stack__top$_ as dialog_stack__top__,
}
export function dialog_stack__top__close(ctx, event) {
	const dialog_stack_top = dialog_stack__top_(ctx)
	if (dialog_stack_top) dialog_stack_top.close(event)
}
