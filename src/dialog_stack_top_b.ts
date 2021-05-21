import { _b } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { dialog_stack_b, dialog_stack_Ctx } from './dialog_stack_b'
const key = 'dialog_stack_top'
export interface dialog_stack_top_Ctx extends dialog_stack_Ctx {
	dialog_stack_top?:dialog_stack_top_T
}
export const dialog_stack_top_b = _b<dialog_stack_top_Ctx, typeof key>(key, ctx=>
	derived$(
		dialog_stack_b(ctx), _last) as dialog_stack_top_T
)
export interface dialog_I {
	close(event?:Event):void
}
export type $dialog_stack_top_T = null|dialog_I
export interface dialog_stack_top_T extends Readable$<$dialog_stack_top_T> {}
