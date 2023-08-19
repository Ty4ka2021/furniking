import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={278}
		height={369}
		viewBox="0 0 278 369"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="0" ry="0" width="278" height="240" />
		<rect x="0" y="255" rx="0" ry="0" width="100" height="14" />
		<rect x="0" y="285" rx="0" ry="0" width="278" height="20" />
		<rect x="120" y="314" rx="0" ry="0" width="100" height="15" />
		<rect x="0" y="314" rx="0" ry="0" width="100" height="15" />
		<rect x="0" y="344" rx="0" ry="0" width="138" height="48" />
	</ContentLoader>
)

export default ProductSkeleton