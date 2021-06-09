import { B, be_ } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { dialog_stack_top$_b } from './dialog_stack_top$_b'
import type { dialog_Ctx } from './dialog_Ctx'
const key = 'close_dialog_stack_top'
export const close_dialog_stack_top_b:B<dialog_Ctx, typeof key> = be_(key, ctx=>{
		return close_dialog_stack_top as close_dialog_stack_top_T
		function close_dialog_stack_top(event:Event) {
			const $dialog_stack_top = get(dialog_stack_top$_b(ctx))
			if ($dialog_stack_top) $dialog_stack_top.close(event)
		}
	}
)
export type close_dialog_stack_top_T = (event:Event)=>void
