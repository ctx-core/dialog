import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { close_dialog_stack_top_T } from './close_dialog_stack_top_b'
import { close_dialog_stack_top_b } from './close_dialog_stack_top_b'
import type { dialog_stack_T } from './dialog_stack_b'
import { dialog_stack_b } from './dialog_stack_b'
import type { dialog_stack_top_T } from './dialog_stack_top_b'
import { dialog_stack_top_b } from './dialog_stack_top_b'
export interface dialog_ctx_I {
	close_dialog_stack_top?:close_dialog_stack_top_T
	dialog_stack?:dialog_stack_T
	dialog_stack_top?:dialog_stack_top_T
	dialog_b_h?:dialog_b_h_T
}
export interface dialog_b_h_T {
	get close_dialog_stack_top():close_dialog_stack_top_T
	get dialog_stack():dialog_stack_T
	get dialog_stack_top():dialog_stack_top_T
}
export function dialog_b_h_b(ctx:dialog_ctx_I):B<dialog_ctx_I, 'dialog_b_h'> {
	return _b('dialog_b_h', ()=>{
		return {
			get close_dialog_stack_top() { return close_dialog_stack_top_b(ctx) },
			get dialog_stack() { return dialog_stack_b(ctx) },
			get dialog_stack_top() { return dialog_stack_top_b(ctx) }
		}
	})
}