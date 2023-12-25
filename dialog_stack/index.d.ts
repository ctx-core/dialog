import type { Ctx } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
import type { dialog_T } from '../_types/index.js'
export declare const [
	dialog_stack$_,
	dialog_stack_,
	dialog_stack__set,
]: be_sig_triple_T<dialog_T[]>
export { dialog_stack$_ as dialog_stack__ }
export declare function dialog_stack__component__add(
	ctx: Ctx,
	dialog: dialog_T
): void
export declare function dialog_stack__component__remove(
	ctx: Ctx,
	dialog: dialog_T
): void
