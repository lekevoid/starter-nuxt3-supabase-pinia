<template>
	<div id="global" class="flex">
		<div class="w-2/12 lg:w-1/12">
			<nav>
				<h2>LE MENU</h2>
				<Logout />
			</nav>
		</div>
		<div class="w-10/12 lg:w-11/12">
			<slot />
		</div>
	</div>
</template>
