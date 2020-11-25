import { Readable } from '@ctx-core/store';
export declare const dialog_stack_top_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<import("@ctx-core/function").maybe<dialog_type, undefined>>;
export interface dialog_type {
    close(event: Event): void;
}
