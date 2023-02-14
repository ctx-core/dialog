import { dialog_stack__top__ } from '../dialog_stack__top__/index.js'
export function dialog_stack__top__close(ctx, event) {
	const dialog_stack_top = dialog_stack__top__(ctx).$
	if (dialog_stack_top) dialog_stack_top.close(event)
}
