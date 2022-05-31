import { ReadableAtom_ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
export declare const dialog_stack_top__:B<ReadableAtom_<dialog_stack_top_T>>
export interface dialog_I {
	close(event?:Event):void;
}
export declare type dialog_stack_top_T = null|dialog_I;
export { dialog_stack_top__ as dialog_stack_top$_ }
