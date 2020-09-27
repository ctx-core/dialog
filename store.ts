import { writable, derived, get, Writable, Readable } from '@ctx-core/store'
import { each, _last, remove } from '@ctx-core/array'
import { assign, _b } from '@ctx-core/object'
import type { maybe_undefined } from '@ctx-core/function'
export const b__stack__dialog = _b<type__stack__dialog>('__stack__dialog', ctx=>{
	const __stack__dialog = writable([] as $type__stack__dialog) as type__stack__dialog
	return assign(__stack__dialog, {
		add__component__stack__dialog,
		remove__component__stack__dialog,
		close__top__stack__dialog,
		close__stack__dialog,
	})
	function add__component__stack__dialog(component) {
		const stack__dialog = get(__stack__dialog).slice(0) as $type__stack__dialog
		stack__dialog.push(component)
		__stack__dialog.set(stack__dialog)
	}
	function remove__component__stack__dialog(component) {
		const stack__dialog = get(__stack__dialog).slice(0) as $type__stack__dialog
		remove(stack__dialog, component)
		__stack__dialog.set(stack__dialog)
	}
	function close__top__stack__dialog(event) {
		const top__stack__dialog = get(b__top__stack__dialog(ctx))
		if (top__stack__dialog) top__stack__dialog.close(event)
	}
	function close__stack__dialog(event?) {
		const stack__dialog = get(__stack__dialog)
		each<dialog_type>(stack__dialog, dialog=>dialog.close(event))
	}
})
export const b__top__stack__dialog = _b<Readable<maybe_undefined<dialog_type>>>('__top__stack__dialog', ctx=>
	derived(b__stack__dialog(ctx), _last))
export type dialog_type = {
	close(event: Event): void
}
export type $type__stack__dialog = dialog_type[]
export interface type__stack__dialog extends Writable<$type__stack__dialog> {
	add__component__stack__dialog:(component:unknown)=>void
	remove__component__stack__dialog:(component:unknown)=>void
	close__top__stack__dialog:(event:Event)=>void
	close__stack__dialog:(event?:Event)=>void
}
