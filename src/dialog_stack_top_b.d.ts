import { Readable } from '@ctx-core/store';
export declare const dialog_stack_top_b: import("@ctx-core/object").be_type<Readable<import("@ctx-core/function").maybe<dialog_type, undefined>>, object>;
export interface dialog_type {
    close(event: Event): void;
}
