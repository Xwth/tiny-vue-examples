<template>
	<div>
		<div id="drop-zone"
		@drop.prevent="drop"
		@dragstart.prevent="dragstart"
		@dragover.prevent="dragenter">
		</div>
		<img v-for="image in images" 
		:src="image.src" 
		:alt="image.name">
		<div v-for="image in images">
			src:{{image.src}}
			name:{{image.name}}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: []
		}
	},
	methods: {
		drop: function(e) {
			console.log("File(s) dropped")
			const dataTransfer = e.dataTransfer ? e.dataTransfer : null
			if (dataTransfer.items) {
				const items = Array.from(e.dataTransfer.items)
				const images = items.filter(item => {
					return /(image\/*).([^\s]+)/.test(item.type)
				})
				this.images = images.map(image => {
					const img = image.getAsFile()
					const src = URL.createObjectURL(img)
					image = { src: src, name: img.name }
					return image
				})
			} else {
				for (let i = 0; i < dataTransfer.length; i++) {
					const element = dataTransfer[i]
					console.log("... file[" + i + "].name = " + element.name)
				}
			}
		},
		dragenter: e => {
			//
			e.dataTransfer.dropEffect = "copy"
		},
		dragstart: e => {
			//
			e.dataTransfer.dropEffect = "none"
		}
	}
}
// TODO:
//		-Make impossible to drag and drop the files already in the page(only from
//		other pages/file explorer)
//		-Upload possible
//		-Animation for the upload
//		-maybe use awesomefont for the icons and upload animations and such
//		-Learn the events hierarchy
</script>

<style scoped>
/*
	TODO:
		-reorganize the style or learn sass 
		and maybe thats the correct way
		-add text to the drop-zone box
*/
#drop-zone {
	border: 2px dashed #ccc;
	border-radius: 20px;
	width: 200px;
	font-family: sans-serif;
	margin: 8px; /*auto at the end for center*/
	padding: 25px;
}
#drop-zone:hover {
	transition: border-color 0.5s ease;
	border-color: #8b0bb380;
}
img {
	border: 1px solid #ddd;
	border-radius: 4px;
	max-width: 300px;
	width: auto;
	padding: 5px;
	margin: 8px;
}
img:hover {
	box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>