import { _b } from '@ctx-core/object'
import { _last } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import type { dialog_Ctx } from './dialog_Ctx'
import { dialog_stack$_b } from './dialog_stack$_b'
const key = 'dialog_stack_top$'
export const dialog_stack_top$_b = _b<dialog_Ctx, typeof key>(key, ctx=>
	derived$(
		dialog_stack$_b(ctx), _last) as dialog_stack_top$_T
)
export interface dialog_I {
	close(event?:Event):void
}
export type dialog_stack_top_T = null|dialog_I
export interface dialog_stack_top$_T extends Readable$<dialog_stack_top_T> {}
