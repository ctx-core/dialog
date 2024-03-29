import type { ctx_T } from 'ctx-core/be'
import type { be_memo_pair_T } from 'ctx-core/rmemo'
import type { dialog_stack_top_T, dialog_T } from '../_types/index.js'
export declare const [
	dialog_stack__top$_,
	dialog_stack__top_,
]:be_memo_pair_T<dialog_stack_top_T>
export {
	dialog_stack__top$_ as dialog_stack_top__,
	dialog_stack__top$_ as dialog_stack__top__,
}
export declare function dialog_stack__close(ctx:ctx_T, event?:Event):void
export declare type dialog_stack_T = dialog_T[]

