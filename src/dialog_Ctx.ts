import type { dialog_stack_T } from './dialog_stack_b'
import type { close_dialog_stack_top_T } from './close_dialog_stack_top_b'
import type { dialog_stack_top_T } from './dialog_stack_top_b'
export interface dialog_Ctx {
	close_dialog_stack_top?:close_dialog_stack_top_T
	dialog_stack?:dialog_stack_T
	dialog_stack_top?:dialog_stack_top_T
}
