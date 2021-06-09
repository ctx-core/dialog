import { B, be_, assign } from '@ctx-core/object'
import { each, remove } from '@ctx-core/array'
import { Writable$, writable$ } from '@ctx-core/store'
import type { dialog_I } from './dialog_stack_top$_b'
import type { dialog_Ctx } from './dialog_Ctx'
const key = 'dialog_stack$'
export const dialog_stack$_b:B<dialog_Ctx, typeof key> = be_(key, ()=>{
	const dialog_stack$ = writable$([] as dialog_stack_T) as dialog_stack$_T
	return assign(dialog_stack$, {
		add_dialog_stack_component,
		remove_dialog_stack_component,
		close_dialog_stack,
	}) as dialog_stack$_T
	function add_dialog_stack_component(dialog:dialog_I) {
		const dialog_stack = dialog_stack$._.slice(0) as dialog_stack_T
		dialog_stack.push(dialog)
		dialog_stack$._ = dialog_stack
	}
	function remove_dialog_stack_component(dialog:dialog_I) {
		const dialog_stack = dialog_stack$._.slice(0) as dialog_stack_T
		remove(dialog_stack, dialog)
		dialog_stack$._ = dialog_stack
	}
	function close_dialog_stack(event?:Event) {
		const dialog_stack = dialog_stack$._
		each<dialog_I>(dialog_stack, dialog=>dialog.close(event))
	}
})
export type dialog_stack_T = dialog_I[]
export interface dialog_stack$_T extends Writable$<dialog_stack_T> {
	add_dialog_stack_component:(component:object)=>void
	remove_dialog_stack_component:(component:object)=>void
	close_dialog_stack:(event?:Event)=>void
}
