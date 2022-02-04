import { dialog_stack_top$_ } from './dialog_stack_top$_.js'
export function close_dialog_stack_top(ctx, event) {
	const dialog_stack_top = dialog_stack_top$_(ctx).$
	if (dialog_stack_top) dialog_stack_top.close(event)
}
