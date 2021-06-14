import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { dialog_I } from './dialog_stack_top$_b';
import type { dialog_Ctx } from './dialog_Ctx';
declare const key = "dialog_stack$";
export declare const dialog_stack$_b: B<dialog_Ctx, typeof key>;
export declare type dialog_stack_T = dialog_I[];
export interface dialog_stack$_T extends Writable$<dialog_stack_T> {
    add_dialog_stack_component: (component: object) => void;
    remove_dialog_stack_component: (component: object) => void;
    close_dialog_stack: (event?: Event) => void;
}
export {};
