import type { be_computed_pair_T } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { dialog_stack_top_T, dialog_T } from '../_types/index.js'
export declare const [
	dialog_stack__top$_,
	dialog_stack__top_,
]:be_computed_pair_T<dialog_stack_top_T>
export {
	dialog_stack__top$_ as dialog_stack_top__,
	dialog_stack__top$_ as dialog_stack__top__,
}
export declare function dialog_stack__close(ctx:Ctx, event?:Event):void
export declare type dialog_stack_T = dialog_T[]

