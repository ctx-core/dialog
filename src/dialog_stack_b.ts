import { _b, assign, B } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import { each, remove } from '@ctx-core/array'
import type { dialog_I } from './dialog_stack_top_b'
export const dialog_stack_b:dialog_stack_b_type = _b('dialog_stack', ()=>{
	const dialog_stack = writable$([] as $dialog_stack_type) as dialog_stack_type
	return assign(dialog_stack, {
		add_dialog_stack_component,
		remove_dialog_stack_component,
		close_dialog_stack,
	}) as dialog_stack_type
	function add_dialog_stack_component(dialog:dialog_I) {
		const $dialog_stack = dialog_stack.$.slice(0) as $dialog_stack_type
		$dialog_stack.push(dialog)
		dialog_stack.set($dialog_stack)
	}
	function remove_dialog_stack_component(dialog:dialog_I) {
		const $dialog_stack = dialog_stack.$.slice(0) as $dialog_stack_type
		remove($dialog_stack, dialog)
		dialog_stack.set($dialog_stack)
	}
	function close_dialog_stack(event?:Event) {
		const $dialog_stack = dialog_stack.$
		each<dialog_I>($dialog_stack, dialog=>dialog.close(event))
	}
})
export type $dialog_stack_type = dialog_I[]
export interface dialog_stack_type extends Writable$<$dialog_stack_type> {
	add_dialog_stack_component:(component:object)=>void
	remove_dialog_stack_component:(component:object)=>void
	close_dialog_stack:(event?:Event)=>void
}
export interface dialog_stack_b_type extends B<dialog_stack_type> {}
