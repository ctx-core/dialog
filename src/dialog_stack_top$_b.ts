import { last_ } from '@ctx-core/array'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { dialog_Ctx } from './dialog_Ctx.js'
import { dialog_stack$_b } from './dialog_stack$_b.js'
const key = 'dialog_stack_top$'
export const dialog_stack_top$_b:B<dialog_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		dialog_stack$_b(ctx), last_) as dialog_stack_top$_T
)
export interface dialog_I {
	close(event?:Event):void
}
export type dialog_stack_top_T = null|dialog_I
export interface dialog_stack_top$_T extends Readable$<dialog_stack_top_T> {}
