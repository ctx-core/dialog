import { _b, assign } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import { each, remove } from '@ctx-core/array'
import type { dialog_I } from './dialog_stack_top_b'
const key = 'dialog_stack'
export interface dialog_stack_Ctx {
	dialog_stack?:dialog_stack_T
}
export const dialog_stack_b = _b<dialog_stack_Ctx, typeof key>(key, ()=>{
	const dialog_stack = writable$([] as $dialog_stack_T) as dialog_stack_T
	return assign(dialog_stack, {
		add_dialog_stack_component,
		remove_dialog_stack_component,
		close_dialog_stack,
	}) as dialog_stack_T
	function add_dialog_stack_component(dialog:dialog_I) {
		const $dialog_stack = dialog_stack.$.slice(0) as $dialog_stack_T
		$dialog_stack.push(dialog)
		dialog_stack.set($dialog_stack)
	}
	function remove_dialog_stack_component(dialog:dialog_I) {
		const $dialog_stack = dialog_stack.$.slice(0) as $dialog_stack_T
		remove($dialog_stack, dialog)
		dialog_stack.set($dialog_stack)
	}
	function close_dialog_stack(event?:Event) {
		const $dialog_stack = dialog_stack.$
		each<dialog_I>($dialog_stack, dialog=>dialog.close(event))
	}
})
export type $dialog_stack_T = dialog_I[]
export interface dialog_stack_T extends Writable$<$dialog_stack_T> {
	add_dialog_stack_component:(component:object)=>void
	remove_dialog_stack_component:(component:object)=>void
	close_dialog_stack:(event?:Event)=>void
}
