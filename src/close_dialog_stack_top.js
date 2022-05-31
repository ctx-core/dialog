import { dialog_stack_top__ } from './dialog_stack_top__.js'
export function close_dialog_stack_top(ctx, event) {
	const dialog_stack_top = dialog_stack_top__(ctx).$
	if (dialog_stack_top) dialog_stack_top.close(event)
}
