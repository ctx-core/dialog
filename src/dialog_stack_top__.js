import { last_ } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { dialog_stack__ } from './dialog_stack__.js'
export const dialog_stack_top__ = be_('dialog_stack_top__', ctx=>
	computed_(
		dialog_stack__(ctx),
		$=>last_($)))
export { dialog_stack_top__ as dialog_stack_top$_ }
