import { B } from '@ctx-core/object';
import { Readable } from '@ctx-core/store';
export declare const dialog_stack_top_b: dialog_stack_top_b_type;
export interface dialog_type {
    close(event: Event): void;
}
export declare type $dialog_stack_top_type = null | dialog_type;
export interface dialog_stack_top_type extends Readable<$dialog_stack_top_type> {
}
export interface dialog_stack_top_b_type extends B<dialog_stack_top_type> {
}
