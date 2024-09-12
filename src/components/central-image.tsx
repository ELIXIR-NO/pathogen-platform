import Image from "next/image";

export default function CentralImage({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) {
	return (
		<Image
			src={src}
			alt={alt}
			width={900}
			height={500}
			className="mx-auto rounded-md"
		/>
	);
}
