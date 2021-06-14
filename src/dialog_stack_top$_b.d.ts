import { B } from '@ctx-core/object';
import { Readable$ } from '@ctx-core/store';
import type { dialog_Ctx } from './dialog_Ctx';
declare const key = "dialog_stack_top$";
export declare const dialog_stack_top$_b: B<dialog_Ctx, typeof key>;
export interface dialog_I {
    close(event?: Event): void;
}
export declare type dialog_stack_top_T = null | dialog_I;
export interface dialog_stack_top$_T extends Readable$<dialog_stack_top_T> {
}
export {};
