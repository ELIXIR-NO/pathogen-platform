export default function Covid19Page() {
	return (
		<section className="flex flex-col space-y-6">
			<h2 className="text-3xl font-bold">COVID-19</h2>
			<h3 className="text-2xl font-bold">
				Coronavirus disease (COVID-19) is an infectious disease caused by the
				novel SARS-CoV-2 virus.
			</h3>
			<p>
				Most people infected with the virus will experience mild to moderate
				respiratory illness and recover without requiring special treatment.
				However, some will become seriously ill and require medical attention.
				Older people and those with underlying medical conditions like
				cardiovascular disease, diabetes, chronic respiratory disease, or cancer
				are more likely to develop serious illness. Anyone can get sick with
				COVID-19 and become seriously ill or die at any age.
			</p>
			<h3 className="text-2xl font-bold">Relevant information</h3>
			<ol className="list-disc">
				<li>
					<a href="https://www.regjeringen.no/en/topics/koronavirus-covid-19/timeline-for-news-from-norwegian-ministries-about-the-coronavirus-disease-covid-19/id2692402/">
						Timeline Norwegian Government
					</a>
				</li>
			</ol>
		</section>
	);
}
