import { Writable, Readable } from '@ctx-core/store';
export declare const b__stack__dialog: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__stack__dialog;
export declare const b__top__stack__dialog: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<import("@ctx-core/function").maybe<dialog_type, undefined>>;
export declare type dialog_type = {
    close(event: Event): void;
};
export declare type $type__stack__dialog = dialog_type[];
export interface type__stack__dialog extends Writable<$type__stack__dialog> {
    add__component__stack__dialog: (component: unknown) => void;
    remove__component__stack__dialog: (component: unknown) => void;
    close__top__stack__dialog: (event: Event) => void;
    close__stack__dialog: (event?: Event) => void;
}
