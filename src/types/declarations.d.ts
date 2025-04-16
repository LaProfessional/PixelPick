declare module "*./module.css" {
    const styles: { [key: string]: string };
    export default styles;
}
declare module "*.svg" {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    export default ReactComponent;
}