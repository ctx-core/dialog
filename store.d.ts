import { Writable } from 'svelte/store';
export interface Writable__stack__dialog extends Writable<any[]> {
    add__component__stack__dialog: (component: any) => void;
    remove__component__stack__dialog: (component: any) => void;
    close__top__stack__dialog: (event: Event) => void;
    close__stack__dialog: (event?: Event) => void;
}
export declare const b__stack__dialog: (ctx?: any, opts?: any) => Writable__stack__dialog;
export declare const __stack__dialog: Writable__stack__dialog;
export declare const add__component__stack__dialog: (component: any) => void, remove__component__stack__dialog: (component: any) => void, close__top__stack__dialog: (event: Event) => void, close__stack__dialog: (event?: Event) => void;
export declare const b__top__stack__dialog: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __top__stack__dialog: import("svelte/store").Readable<any>;
