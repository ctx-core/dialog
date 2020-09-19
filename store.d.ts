import { Writable } from 'svelte/store';
export declare const b__stack__dialog: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__stack__dialog;
export declare const b__top__stack__dialog: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<unknown>;
export interface type__stack__dialog extends Writable<unknown[]> {
    add__component__stack__dialog: (component: unknown) => void;
    remove__component__stack__dialog: (component: unknown) => void;
    close__top__stack__dialog: (event: Event) => void;
    close__stack__dialog: (event?: Event) => void;
}
