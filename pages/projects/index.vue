<script setup>
	const categories = ref([
		'All projects',
		'Personal',
		'School',
		'Professional',
	]);
	const pickedCategory = ref(categories.value[0]);
	const projects = ref([
		{
			id: 15,
			title: 'Resin - Open-Source Real Estate Platform',
			description:
				'Resin is an open-source real estate platform that helps users purchase homes without relying on traditional bank loans. With a map-based interface, users can easily discover properties, view detailed listings, and explore alternative financing options. The platform leverages modern technologies such as Nuxt 3, Nostr, and TypeScript to deliver a scalable, intuitive, and secure experience.',
			category: 'Professional',
			image: '/projects-img/resin.webp',
			tags: [
				'devicon-plain:nuxtjs',
				'simple-icons:tailwindcss',
				'devicon-plain:typescript',
			],
			website: 'https://resin.estate',
			github: 'https://github.com/DaedalusLabs/RESIN',
		},
		{
			id: 14,
			title: 'Project Nekton - Smart Lighting App',
			description:
				'In collaboration with Sibren Eeckhout and Project Nekton, I developed an innovative lighting application specifically designed for sports and recreation centers. This application enables users to adjust light intensity via their smartphone, illuminate specific areas of a field, and easily schedule lighting with an integrated calendar. With a focus on energy efficiency and ease of use, the app makes lighting management fully automatic and intuitive.',
			category: 'Professional',
			image: '/projects-img/project-nekton.webp',
			tags: [
				'devicon-plain:amazonwebservices-wordmark',
				'devicon-plain:nodejs',
				'devicon-plain:nuxtjs',
				'simple-icons:tailwindcss',
			],
			website: 'https://www.projectnekton.com/',
			linkedin:
				'https://www.linkedin.com/posts/lukas-olivier_softwaredevelopment-innovatie-itoplossingen-activity-7264602992761303040-znGZ?utm_source=share&utm_medium=member_desktop',
		},
		{
			id: 13,
			title: 'Spel Zonder Grenzen',
			description:
				'Spel Zonder Grenzen is a team building activity where participants compete in teams against each other in various trials. This for both young and old. Their old website was outdated and difficult to manage. I got the opportunity to make a new website for them. The website is made using Nuxt.js and Tailwind CSS.',
			category: 'Professional',
			image: '/projects-img/szg.webp',
			tags: ['devicon-plain:nuxtjs', 'simple-icons:tailwindcss'],
			website: 'https://new.szg.be',
		},
		{
			id: 12,
			title: 'Bachelor Thesis - REST API Frameworks',
			description:
				'My bachelor thesis investigates REST APIs, focusing on the performance and optimization of four frameworks: Express.js, Django, ASP.NET Core, and Bun. By developing a Student Management API for each framework, I analyzed their efficiency data access. Key findings indicate that Bun and ASP.NET Core had the lowest response times. This research provides valuable insights into selecting the right framework based on project needs and developer preferences. Read the full thesis on my GitHub.',
			category: 'School',
			image: '/projects-img/bap.webp',
			tags: [
				'devicon-plain:nodejs',
				'devicon-plain:django',
				'devicon-plain:dotnetcore',
				'devicon-plain:bun',
				'devicon-plain:postman',
			],
			github: 'https://github.com/LukasOlivier/bap',
			website: '/blog/10-bachelor-thesis-rest-api',
		},
		{
			id: 11,
			title: 'Integreat Dashboard',
			description:
				'During my internship, I developed the Integreat Dashboard, a tool designed to enhance client services by providing customizable dashboards for data visualization and analysis. Utilizing Blazor as base and DevExpress for its rich UI components, the dashboard integrates seamlessly with SQL Server for data management. Key features include customizable widgets, multi-language support, data export options, user preferences, and data filtering. This project significantly boosted my skills in Blazor, SQL Server, and DevExpress.',
			category: 'Professional',
			image: '/projects-img/integreat.webp',
			tags: ['simple-icons:blazor', 'devicon-plain:microsoftsqlserver'],
			website: 'https://integreat.be',
		},
		{
			id: 10,
			title: 'Portfolio v2',
			description:
				"This is the second version of my portfolio, now seamlessly integrating both my blog and portfolio into a single, cohesive website. I have utilized the Nuxt framework and Tailwind CSS for styling, moving away from vanilla HTML, JavaScript, and SASS. The blog posts are generated from markdown files using the @nuxt/content module. I'm extremely pleased with the outcome and hope you find it equally impressive!",
			category: 'Personal',
			image: '/projects-img/portfolio2.webp',
			tags: ['devicon-plain:nuxtjs', 'simple-icons:tailwindcss'],
			github: 'https://github.com/LukasOlivier/portfolio-v2',
			website: '/',
		},
		{
			id: 9,
			title: 'Izegem Klinkt',
			description:
				'I made this website for Izegem Klinkt, a captivating musical tour in the heart of the "Pekkersstad" Izegem. With over 30 editions, they have been celebrating music, camaraderie, and togetherness, all thanks to the dedicated efforts of passionate volunteers. This website, built using Nuxt 3, serves as the digital hub for Izegem Klinkt, providing essential information about the event, including dates, locations, and line-ups.',
			image: '/projects-img/izegemklinkt.webp',
			category: 'Professional',
			tags: ['devicon-plain:nuxtjs', 'simple-icons:tailwindcss'],
			website: 'https://izegemklinkt.be',
		},
		{
			id: 8,
			title: 'Eventiz',
			description:
				'Eventiz is a huge school project redefining event management. The primary goal of this project was to create a safer and more efficient way of managing events. We developed a wide variety of application with different languages and frameworks to achieve this goal.',
			image: '/projects-img/eventiz.webp',
			category: 'School',
			tags: [
				'devicon-plain:svelte',
				'devicon-plain:laravel',
				'simple-icons:tailwindcss',
				'devicon-plain:python',
				'simple-icons:tensorflow',
				'devicon-plain:androidstudio',
				'simple-icons:electron',
				'devicon-plain:flutter',
			],
			github: 'https://github.com/LukasOlivier/eventiz',
		},
		{
			id: 7,
			title: 'Personal blog v1',
			description:
				"I started this blog to share my experiences and knowledge with the world. I write about my projects, my experiences and anything else I find interesting. It's a Next.js project bootstrapped with create-next-app. I used Tailwindcss to style the website.",
			image: '/projects-img/blog1.webp',
			category: 'Personal',
			tags: ['devicon-plain:nextjs', 'simple-icons:tailwindcss'],
			github: 'https://github.com/LukasOlivier/blog',
			website: 'https://blog-v1.lukasolivier.be',
		},
		{
			id: 6,
			title: 'BrandY game',
			description:
				"BrandY is a long term project which I got the opportunity to work on during my last year of my bachelor's degree in software engineering at Howest Brugge. We got the chance to make a 2.0 version of the game, based on feature request from the BrandY team. The game is made using SvelteKit and the backend is made using Laravel. This project taught me a lot about working in a team and how a real life project works.",
			image: '/projects-img/brandy.webp',
			category: 'School',
			tags: ['devicon-plain:svelte', 'devicon-plain:laravel'],
			website: 'https://brandygame.eu',
			linkedin:
				'https://www.linkedin.com/posts/lieven-theys-73167216_howestinternational-howestbedrijfsmanagement-ugcPost-7136776955432988672-JmY0/?utm_source=share&utm_medium=member_desktop',
		},
		{
			id: 5,
			title: 'Tappd',
			description:
				'Tappd is an online ordering service for bars and restaurants. It allows customers to order their drinks and food without having to wait for a waiter. The waiter receives the order on a tablet and can then serve the customer. The owner can manage the menu and available tables. The client is made using vanilla HTML, CSS & JavaScript and the server is made using Laravel.',
			image: '/projects-img/tappd.webp',
			category: 'Personal',
			tags: [
				'devicon-plain:html5',
				'devicon-plain:css3',
				'devicon-plain:javascript',
				'devicon-plain:laravel',
			],
			github: 'https://github.com/LukasOlivier/tappd-v1',
		},
		{
			id: 4,
			title: 'Events United',
			description:
				'In the Mars project, we developed a Martian startup for a better life on Mars. Instead of programming, the focus was on a strong business case and smooth collaboration within the team. Thanks to targeted documentation and information modeling, we not only prepared a convincing business case but also ensured a smooth start and effective teamwork. Our project, "Events United," organized events on Mars based on user interests collected by "Marsmind," another fictional company. The technical implementation included a front-end with HTML5, SASS, and JavaScript, and a back-end with Java and VertX. A Proof of Concept served as a brief demo. All details, including documentation and the business case, are available on GitHub.',
			image: '/projects-img/mars.webp',
			category: 'School',
			tags: [
				'devicon-plain:html5',
				'simple-icons:sass',
				'devicon-plain:javascript',
				'devicon-plain:java',
				'devicon-plain:vertx',
			],
			github: 'https://github.com/LukasOlivier/events-united',
		},
		{
			id: 3,
			title: 'Pilsopoly',
			description:
				'PilsoPoly is a project I made for school. We gave it a Belgian twist by making it about beer and brewers. The client is made using vanilla HTML, CSS & JavaScript and the back-end is made using Java (VertX)',
			image: '/projects-img/pilsopoly.webp',
			category: 'School',
			tags: [
				'devicon-plain:html5',
				'devicon-plain:css3',
				'devicon-plain:javascript',
				'devicon-plain:java',
				'devicon-plain:vertx',
			],
			github: 'https://github.com/LukasOlivier/pilsopoly',
		},
		{
			id: 2,
			title: 'Home server',
			description:
				'I run all sorts of self hosted services on my Raspberry Pi. These are run using Docker containers and managed using Dockge. Safely exposed to the internet using Cloudflare Tunnels. The server is running Ubuntu Server 23.10 LTS. I am running Nextcloud for file storage, Bitwarden for password management and Immich for photo and video storage. I am using RAID 1 for data redundancy.',
			image: '/projects-img/homeserver.webp',
			category: 'Personal',
			tags: [
				'devicon-plain:docker',
				'devicon-plain:ubuntu',
				'devicon-plain:cloudflare',
			],
		},
		{
			id: 1,
			title: 'Portfolio v1',
			description:
				'This is the first version of my portfolio. This website is made using vanilla HTML / JavaScript. I used SASS to manage the CSS. The domain is provided by Combell. During my education I made use of AcademicSoftware to use this service for free.',
			image: '/projects-img/portfolio1.webp',
			category: 'Personal',
			tags: [
				'devicon-plain:html5',
				'simple-icons:sass',
				'devicon-plain:javascript',
			],
			github: 'https://github.com/LukasOlivier/portfolio-v1',
			website: 'https://v1.lukasolivier.be',
		},
		{
			id: 0,
			title: 'Cocktail maker',
			description:
				'My final project at VTI is an automatic cocktail maker. The system, controlled by an Arduino, uses configured pumps, an LCD screen, and a stepper motor for precise dosing and operation. An ultrasonic sensor prevents unintended spills. Through an app, developed with MIT App Inventor, users can order the desired cocktail type and the number of shots. All orders are recorded in a Firebase database. The project was a great learning experience in electronics and programming basics',
			image: '/projects-img/cocktail.webp',
			category: 'School',
			tags: ['devicon-plain:arduino', 'devicon-plain:firebase'],
			github: 'https://github.com/LukasOlivier/cocktailmaker',
		},
	]);

	function getProjects() {
		return projects.value.filter((project) => {
			if (pickedCategory.value === 'All projects') return true;
			return project.category === pickedCategory.value;
		});
	}

	useHead({
		title: 'Projects',
		meta: [
			{
				name: 'description',
				content:
					'Here you will find all the projects I have worked on during my career.',
			},
			{
				rel: 'canonical',
				href: 'https://www.lukasolivier.be/projects',
			},
		],
	});
</script>

<template>
	<div class="mx-auto mb-5 mt-20 w-9/12">
		<h1
			class="my-5 text-4xl font-semibold leading-tight text-black dark:text-zinc-300 md:text-5xl"
		>
			My Projects
		</h1>
		<p class="mb-10 dark:text-zinc-300">
			Here you will find all the projects I have worked on during my career.
		</p>
		<section class="flex flex-col">
			<div>
				<h2
					class="my-5 text-2xl font-semibold leading-tight text-black dark:text-zinc-300 md:text-3xl"
				>
					Categories
				</h2>
				<ul class="mb-5 flex flex-wrap gap-5">
					<li
						v-for="category in categories"
						:key="category"
						class="cursor-pointer"
						:class="{
							'font-semibold underline': pickedCategory === category,
						}"
						@click="pickedCategory = category"
					>
						{{ category }}
					</li>
				</ul>
			</div>
			<ul
				class="xxl:grid-cols-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
			>
				<project-item
					v-for="project in getProjects()"
					:key="project.id"
					:project="project"
					@click="showFullDescription(project)"
				/>
			</ul>
		</section>
	</div>
</template>
