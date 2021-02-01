<script>
export let tabindex = '0'
</script>

<a
	href="."
	class="close Dialog_Close {$$props.class||''}"
	tabindex="{tabindex || '0'}"
	on:click|preventDefault
><slot>&#10006;</slot></a>

<style type="text/scss">
:global(.Dialog_Close) {
	text-decoration: none;
}
</style>
