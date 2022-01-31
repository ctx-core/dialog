import { last_ } from '@ctx-core/array'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { dialog_stack$_ } from './dialog_stack$_.js'
const key = 'dialog_stack_top$'
export const dialog_stack_top$_:B<dialog_stack_top$_T> = be_(key, ctx=>
	computed$(
		dialog_stack$_(ctx), last_) as dialog_stack_top$_T
)
export interface dialog_I {
	close(event?:Event):void
}
export type dialog_stack_top_T = null|dialog_I
export type dialog_stack_top$_T = ReadableAtom$<dialog_stack_top_T>
