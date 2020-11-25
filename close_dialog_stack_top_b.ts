import { get } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { dialog_stack_top_b } from './dialog_stack_top_b'
export const close_dialog_stack_top_b = _b(
	'close_dialog_stack_top', (ctx)=>{
		return function close_dialog_stack_top(event) {
			const $dialog_stack_top = get(dialog_stack_top_b(ctx))
			if ($dialog_stack_top) $dialog_stack_top.close(event)
		}
	})
