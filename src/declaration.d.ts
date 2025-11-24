declare module '*.css' {
    const content: {[className: string]: string};
    export default content;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}
declare module 'swiper/css' {
 const content: string;
 export default content;
}