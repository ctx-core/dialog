import { Writable } from '@ctx-core/store';
import type { dialog_type } from './dialog_stack_top_b';
export declare const dialog_stack_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => dialog_stack_type;
export declare type $dialog_stack_type = dialog_type[];
export interface dialog_stack_type extends Writable<$dialog_stack_type> {
    add_dialog_stack_component: (component: unknown) => void;
    remove_dialog_stack_component: (component: unknown) => void;
    close_dialog_stack: (event?: Event) => void;
}
