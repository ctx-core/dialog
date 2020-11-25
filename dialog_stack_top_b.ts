import type { maybe_undefined } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived, Readable } from '@ctx-core/store'
import { dialog_stack_b } from './dialog_stack_b'
export const dialog_stack_top_b = _b<Readable<maybe_undefined<dialog_type>>>('dialog_stack_top', ctx=>
	derived(
		dialog_stack_b(ctx), _last))
export interface dialog_type {
	close(event:Event):void
}
