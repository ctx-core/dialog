import { last_ } from '@ctx-core/array'
import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { dialog_stack$_b } from './dialog_stack$_b.js'
const key = 'dialog_stack_top$'
export const dialog_stack_top$_b:B<dialog_stack_top$_T> = be_(key, ctx=>
	computed$(
		dialog_stack$_b(ctx), last_) as dialog_stack_top$_T
)
export interface dialog_I {
	close(event?:Event):void
}
export type dialog_stack_top_T = null|dialog_I
export interface dialog_stack_top$_T extends ReadableAtom$<dialog_stack_top_T> {}
