import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { dialog_I } from './dialog_stack_top_b';
export declare const dialog_stack_b: dialog_stack_b_type;
export declare type $dialog_stack_type = dialog_I[];
export interface dialog_stack_type extends Writable$<$dialog_stack_type> {
    add_dialog_stack_component: (component: object) => void;
    remove_dialog_stack_component: (component: object) => void;
    close_dialog_stack: (event?: Event) => void;
}
export interface dialog_stack_b_type extends B<dialog_stack_type> {
}
