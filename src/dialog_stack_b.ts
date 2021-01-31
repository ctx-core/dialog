import { _b, assign } from '@ctx-core/object'
import { get, Writable, writable } from '@ctx-core/store'
import { each, remove } from '@ctx-core/array'
import type { dialog_type } from './dialog_stack_top_b'
export const dialog_stack_b = _b('dialog_stack', ()=>{
	const dialog_stack = writable([] as $dialog_stack_type) as dialog_stack_type
	return assign(dialog_stack, {
		add_dialog_stack_component,
		remove_dialog_stack_component,
		close_dialog_stack,
	}) as dialog_stack_type
	function add_dialog_stack_component(component) {
		const $dialog_stack = get(dialog_stack).slice(0) as $dialog_stack_type
		$dialog_stack.push(component)
		dialog_stack.set($dialog_stack)
	}
	function remove_dialog_stack_component(component) {
		const $dialog_stack = get(dialog_stack).slice(0) as $dialog_stack_type
		remove($dialog_stack, component)
		dialog_stack.set($dialog_stack)
	}
	function close_dialog_stack(event?) {
		const $dialog_stack = get(dialog_stack)
		each<dialog_type>($dialog_stack, dialog=>dialog.close(event))
	}
})
export type $dialog_stack_type = dialog_type[]
export interface dialog_stack_type extends Writable<$dialog_stack_type> {
	add_dialog_stack_component:(component:unknown)=>void
	remove_dialog_stack_component:(component:unknown)=>void
	close_dialog_stack:(event?:Event)=>void
}
