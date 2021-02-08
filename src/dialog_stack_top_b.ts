import { _b, B } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived, Readable } from '@ctx-core/store'
import { dialog_stack_b } from './dialog_stack_b'
export const dialog_stack_top_b:dialog_stack_top_b_type = _b('dialog_stack_top', ctx=>
	derived(
		dialog_stack_b(ctx), _last) as dialog_stack_top_type
)
export interface dialog_type {
	close(event:Event):void
}
export type $dialog_stack_top_type = null|dialog_type
export interface dialog_stack_top_type extends Readable<$dialog_stack_top_type> {}
export interface dialog_stack_top_b_type extends B<dialog_stack_top_type> {}
