import React from 'react';

export default () => {
	return (
		<main className="home-content">
			<section className="home-banner">
				<picture>
					<source media="min-width: 998px" srcSet={require('../img/artigo.jpg')} />
					<source media="max-width: 997px" srcSet={require('../img/artigo.jpg')} />
					<img src={require('../img/artigo.jpg')} alt="Home Banner" />
				</picture>
			</section>
			<section className="bloco-texto home-bloco-1">
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					Duis autem
				</p>
			</section>
		</main>
	);
};
