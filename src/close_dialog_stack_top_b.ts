import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { dialog_stack_top_b, dialog_stack_top_Ctx } from './dialog_stack_top_b'
const key = 'close_dialog_stack_top'
export interface close_dialog_stack_top extends dialog_stack_top_Ctx {
	close_dialog_stack_top?:close_dialog_stack_top_T
}
export const close_dialog_stack_top_b = _b(key, (ctx)=>{
		return close_dialog_stack_top as close_dialog_stack_top_T
		function close_dialog_stack_top(event:Event) {
			const $dialog_stack_top = get(dialog_stack_top_b(ctx))
			if ($dialog_stack_top) $dialog_stack_top.close(event)
		}
	}
)
export type close_dialog_stack_top_T = (event:Event)=>void
