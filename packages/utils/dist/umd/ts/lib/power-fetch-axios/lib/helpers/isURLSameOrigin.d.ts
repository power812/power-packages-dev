interface URLOrigin {
    protocol: string;
    host: string;
    port: string;
}
export declare function resolveURL(url: string): URLOrigin;
export default function isURLSameOrigin(requestURL: string): boolean;
export {};
