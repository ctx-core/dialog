import { WritableAtom$ } from '@ctx-core/nanostores'
import { B, Ctx } from '@ctx-core/object'
import type { dialog_I } from './dialog_stack_top$_.js'
export declare const dialog_stack$_:B<dialog_stack$_T>
export declare function add_dialog_stack_component(ctx:Ctx, dialog:dialog_I):void;
export declare function remove_dialog_stack_component(ctx:Ctx, dialog:dialog_I):void;
export declare function close_dialog_stack(ctx:Ctx, event?:Event):void;
export declare type dialog_stack_T = dialog_I[];
export declare type dialog_stack$_T = WritableAtom$<dialog_stack_T>;
