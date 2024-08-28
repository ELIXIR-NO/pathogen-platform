export default function EmailTemplate({ message }: { message: string }) {
	return (
		<div>
			<h1 className="text-xl font-bold">Request from Pathogen Portal</h1>
			<div>{message}</div>
		</div>
	);
}
