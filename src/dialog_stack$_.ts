import { each, remove } from '@ctx-core/array'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_, assign } from '@ctx-core/object'
import type { dialog_I } from './dialog_stack_top$_.js'
const key = 'dialog_stack$'
export const dialog_stack$_:B<dialog_stack$_T> = be_(key, ()=>{
	const dialog_stack$ = atom$([] as dialog_stack_T) as dialog_stack$_T
	return assign(dialog_stack$, {
		add_dialog_stack_component,
		remove_dialog_stack_component,
		close_dialog_stack,
	}) as dialog_stack$_T
	function add_dialog_stack_component(dialog:dialog_I) {
		const dialog_stack = dialog_stack$.$.slice(0) as dialog_stack_T
		dialog_stack.push(dialog)
		dialog_stack$.$ = dialog_stack
	}
	function remove_dialog_stack_component(dialog:dialog_I) {
		const dialog_stack = dialog_stack$.$.slice(0) as dialog_stack_T
		remove(dialog_stack, dialog)
		dialog_stack$.$ = dialog_stack
	}
	function close_dialog_stack(event?:Event) {
		const dialog_stack = dialog_stack$.$
		each<dialog_I>(dialog_stack, dialog=>dialog.close(event))
	}
})
export type dialog_stack_T = dialog_I[]
export interface dialog_stack$_T extends WritableAtom$<dialog_stack_T> {
	add_dialog_stack_component:(component:object)=>void
	remove_dialog_stack_component:(component:object)=>void
	close_dialog_stack:(event?:Event)=>void
}
