import { _b, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { dialog_stack_top_b } from './dialog_stack_top_b'
export const close_dialog_stack_top_b:close_dialog_stack_top_b_type = _b('close_dialog_stack_top', (ctx)=>{
		return close_dialog_stack_top as close_dialog_stack_top_type
		function close_dialog_stack_top(event:Event) {
			const $dialog_stack_top = get(dialog_stack_top_b(ctx))
			if ($dialog_stack_top) $dialog_stack_top.close(event)
		}
	}
)
export type close_dialog_stack_top_type = (event:Event)=>void
export interface close_dialog_stack_top_b_type extends B<close_dialog_stack_top_type> {}