import { Readable$ } from '@ctx-core/store';
import { dialog_stack_Ctx } from './dialog_stack_b';
export interface dialog_stack_top_Ctx extends dialog_stack_Ctx {
    dialog_stack_top?: dialog_stack_top_T;
}
export declare const dialog_stack_top_b: import("@ctx-core/object").Be<dialog_stack_top_Ctx, "dialog_stack_top">;
export interface dialog_I {
    close(event?: Event): void;
}
export declare type $dialog_stack_top_T = null | dialog_I;
export interface dialog_stack_top_T extends Readable$<$dialog_stack_top_T> {
}
