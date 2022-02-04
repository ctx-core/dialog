import { last_ } from '@ctx-core/array'
import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { dialog_stack$_ } from './dialog_stack$_.js'
const key = 'dialog_stack_top$'
export const dialog_stack_top$_ = be_(key, (ctx)=>
	computed$(
		dialog_stack$_(ctx),
		$=>last_($)))
