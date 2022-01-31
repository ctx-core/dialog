import type { Ctx } from '@ctx-core/object'
import { dialog_stack_top$_ } from './dialog_stack_top$_.js'
export function close_dialog_stack_top(ctx:Ctx, event:Event) {
	const dialog_stack_top = dialog_stack_top$_(ctx).$
	if (dialog_stack_top) dialog_stack_top.close(event)
}
export type close_dialog_stack_top_T = (event:Event)=>void
