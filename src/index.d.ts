declare module '*.Module.scss' {
	const content: { [key: string]: any };
	export default content;
}

declare module '*.svg' {
	const svg: string;
	export default svg;
}
