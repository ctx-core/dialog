import { Writable$ } from '@ctx-core/store';
import type { dialog_I } from './dialog_stack_top_b';
export interface dialog_stack_Ctx {
    dialog_stack?: dialog_stack_T;
}
export declare const dialog_stack_b: import("@ctx-core/object").Be<dialog_stack_Ctx, "dialog_stack", dialog_stack_T>;
export declare type $dialog_stack_T = dialog_I[];
export interface dialog_stack_T extends Writable$<$dialog_stack_T> {
    add_dialog_stack_component: (component: object) => void;
    remove_dialog_stack_component: (component: object) => void;
    close_dialog_stack: (event?: Event) => void;
}
