import { type WritableAtom_ } from '@ctx-core/nanostores'
import { B, Ctx } from '@ctx-core/object'
import type { dialog_T } from '../dialog_stack__top__.js'
export declare const dialog_stack__:B<WritableAtom_<dialog_stack_T>>
export declare function dialog_stack__component__add(ctx:Ctx, dialog:dialog_T):void
export declare function dialog_stack__component__remove(ctx:Ctx, dialog:dialog_T):void
export declare function dialog_stack__close(ctx:Ctx, event?:Event):void
export declare type dialog_stack_T = dialog_T[]
export { dialog_stack__ as dialog_stack$_ }
