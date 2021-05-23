import { Readable$ } from '@ctx-core/store';
import type { dialog_Ctx } from './dialog_Ctx';
export declare const dialog_stack_top_b: import("@ctx-core/object").Be<dialog_Ctx, "dialog_stack_top", dialog_stack_top_T>;
export interface dialog_I {
    close(event?: Event): void;
}
export declare type $dialog_stack_top_T = null | dialog_I;
export interface dialog_stack_top_T extends Readable$<$dialog_stack_top_T> {
}
