import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
export declare const dialog_stack_top$_:B<dialog_stack_top$_T>
export interface dialog_I {
	close(event?:Event):void;
}
export declare type dialog_stack_top_T = null|dialog_I;
export declare type dialog_stack_top$_T = ReadableAtom_<dialog_stack_top_T>;
